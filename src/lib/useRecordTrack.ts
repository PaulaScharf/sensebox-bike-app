import { toast } from '@/components/ui/use-toast'
import { point } from '@turf/helpers'
import { useEffect, useRef, useState } from 'react'
import { uploadData } from './api/openSenseMapClient'
import { useTrack } from './db/hooks'
import { isInExclusionZone } from './exclusion-zone'
import match from './senseBoxSensorIdMatcher'
import { useAuthStore } from './store/useAuthStore'
import { useSenseBoxValuesStore } from './store/useSenseBoxValuesStore'
import { useSettingsStore } from './store/useSettingsStore'
import { useTrackRecordStore } from './store/useTrackRecordStore'
import { useUploadStore } from './store/useUploadStore'
import useSenseBox from './useSenseBox'

const useRecordTrack = () => {
  const [isLoading, setIsLoading] = useState(false)
  const selectedBox = useAuthStore(state => state.selectedBox)
  const values = useSenseBoxValuesStore(state => state.values)
  const valuesRef = useRef<typeof values>()
  valuesRef.current = values

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>()
  const lastUpload = useUploadStore(state => state.lastUpload)
  const setRecording = useUploadStore(state => state.setRecording)
  const lastUploadRef = useRef<typeof lastUpload>()
  lastUploadRef.current = lastUpload
  const setLastUpload = useUploadStore(state => state.setLastUpload)

  const interval_in_s = useSettingsStore(state => state.uploadInterval)
  const interval = interval_in_s * 1000

  const uploadStart = useSenseBoxValuesStore(state => state.uploadStart)
  const setUploadStart = useSenseBoxValuesStore(state => state.setUploadStart)
  const uploadStartRef = useRef<typeof uploadStart>()
  uploadStartRef.current = uploadStart

  const currentTrackId = useTrackRecordStore(state => state.currentTrackId)
  const setCurrentTrackId = useTrackRecordStore(
    state => state.setCurrentTrackId,
  )

  const { createTrack, endTrack } = useTrack()

  const { isConnected } = useSenseBox()

  useEffect(() => {
    if (!intervalId) {
      return
    }

    stop(true)
    start(true)

    return () => {
      console.log('in effect cleanup')
      clearInterval(intervalId)
      setIntervalId(undefined)
    }
  }, [interval])

  useEffect(() => {
    // when the connection is lost, stop uploading
    if (!isConnected && intervalId) {
      stop()
    }
  }, [isConnected])

  async function start(intervalChange?: boolean) {
    setUploadStart(new Date())

    const intervalId = setInterval(() => {
      uploadToOpenSenseMap()
    }, interval)
    setIntervalId(intervalId)

    if (!intervalChange) {
      setRecording(true)
      const trackId = await createTrack()
      setCurrentTrackId(trackId)
    }
  }

  function stop(intervalChange?: boolean) {
    clearInterval(intervalId)
    setIntervalId(undefined)
    setUploadStart(undefined)
    uploadToOpenSenseMap() // upload last data

    if (!intervalChange) {
      setRecording(false)
      if (!currentTrackId) {
        return
      }
      endTrack(currentTrackId)
      setCurrentTrackId(undefined)
      toast({
        description: 'Du findest den Track im Tracks Menü',
        title: 'Track gespeichert',
      })
    }
  }

  async function uploadToOpenSenseMap() {
    if (!selectedBox) {
      return
      // throw new Error('No box selected.')
    }
    if (!valuesRef.current) {
      throw new Error('No values.')
    }

    const data = valuesRef.current
      .filter(
        record => !isInExclusionZone(point([record.gps_lng!, record.gps_lat!])),
      )
      .flatMap(record => match(selectedBox, record))
      .map(record => ({
        ...record,
        value: record.value.toFixed(2),
      }))
      .slice(-2500) // max data to upload

    let filteredData = data

    if (lastUploadRef.current && uploadStartRef.current) {
      filteredData = data.filter(
        record =>
          new Date(record.createdAt).getTime() >
            uploadStartRef.current!.getTime() &&
          new Date(record.createdAt).getTime() >
            lastUploadRef.current!.getTime(),
      )
    }

    if (filteredData.length === 0) {
      console.log('No new data to upload.')
      return
    }

    try {
      setIsLoading(true)
      await uploadData(selectedBox, filteredData)
      const maxTimestamp = new Date(
        Math.max(...data.map(record => new Date(record.createdAt).getTime())),
      )
      setLastUpload(maxTimestamp)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { isRecording: intervalId !== undefined, isLoading, start, stop }
}

export default useRecordTrack
