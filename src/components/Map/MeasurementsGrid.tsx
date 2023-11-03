import useSenseBox from '@/lib/useSenseBox'
import { AreaChart, AreaChartProps } from '@tremor/react'
import AnimatedNumber from '../ui/animated-number'
import { Button } from '../ui/button'
import {
  Bluetooth,
  BluetoothOff,
  Circle,
  Square,
  UploadCloud,
  UserCog2,
} from 'lucide-react'
import { useAuthStore } from '@/lib/store/useAuthStore'
import useUploadToOpenSenseMap from '@/lib/useUploadToOpenSenseMap'
import WizardDrawer from '../Wizard/WizardDrawer'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function MeasurementsGrid() {
  const { values: allValues, connect, isConnected, disconnect } = useSenseBox()
  const { selectedBox } = useAuthStore()
  const { isRecording, start, stop, isLoading } = useUploadToOpenSenseMap()

  const values = allValues.filter((_, i) => i > allValues.length - 20)
  const lastValue = values.at(-1)

  return (
    <div className="flex h-full w-full flex-col justify-around p-1">
      <div
        className={cn(
          'relative flex h-full w-full flex-col',
          !selectedBox || values.length === 0 ? '' : 'divide-y',
        )}
      >
        <div className="flex w-full justify-between divide-x">
          <GridItem
            name="Temperatur"
            value={lastValue?.temperature}
            unit="°C"
            areaProps={{
              data: values.map(v => ({ x: v.timestamp, y: v.temperature })),
              index: 'x',
              categories: ['y'],
            }}
          />
          <GridItem
            name="Geschwindigkeit"
            value={lastValue?.gps_spd}
            unit="km/h"
            areaProps={{
              data: values.map(v => ({ x: v.timestamp, y: v.gps_spd })),
              index: 'x',
              categories: ['y'],
            }}
          />
          <GridItem
            name="Luftfeuchtigkeit"
            value={lastValue?.humidity}
            unit="%"
            areaProps={{
              data: values.map(v => ({ x: v.timestamp, y: v.humidity })),
              index: 'x',
              categories: ['y'],
            }}
          />
        </div>
        <div className="flex w-full justify-between divide-x">
          <GridItem
            name="Feinstaub"
            value={[
              lastValue?.pm1,
              lastValue?.pm2_5,
              lastValue?.pm4,
              lastValue?.pm10,
            ]}
            labels={['PM1', 'PM2.5', 'PM4', 'PM10']}
            unit="µg/m³"
            areaProps={{
              data: values
                .filter(e => e.pm1)
                .map(v => ({
                  x: v.timestamp,
                  pm1: v.pm1,
                  pm2_5: v.pm2_5,
                  pm4: v.pm4,
                  pm10: v.pm10,
                })),
              index: 'x',
              categories: ['pm1', 'pm2_5', 'pm4', 'pm10'],
              colors: ['indigo', 'cyan', 'amber', 'emerald'],
            }}
          />
          <GridItem
            name="Distanz Links"
            value={lastValue?.distance_l}
            unit="cm"
            areaProps={{
              data: values.map(v => ({ x: v.timestamp, y: v.distance_l })),
              index: 'x',
              categories: ['y'],
            }}
          />

          <GridItem
            name="Beschl."
            value={[
              lastValue?.acceleration_x,
              lastValue?.acceleration_y,
              lastValue?.acceleration_z,
            ]}
            unit="m/s²"
            labels={['X', 'Y', 'Z']}
            areaProps={{
              data: values.map(v => ({
                x: v.timestamp,
                acceleration_x: v.acceleration_x,
                acceleration_y: v.acceleration_y,
                acceleration_z: v.acceleration_z,
              })),
              index: 'x',
              categories: [
                'acceleration_x',
                'acceleration_y',
                'acceleration_z',
              ],
              colors: ['indigo', 'cyan', 'amber'],
            }}
          />
        </div>
        {(!selectedBox || values.length === 0) && (
          <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-background/75 p-12 backdrop-blur">
            {!selectedBox && (
              <p className="text-center text-sm">
                Bitte verknüpfen Sie eine senseBox über den Setup-Button.
              </p>
            )}
            {selectedBox && (
              <p className="text-center text-sm">
                Sie können sich nun mit der senseBox verbinden und die Messwerte
                aufzeichnen
              </p>
            )}
          </div>
        )}
      </div>
      <div className="flex w-full justify-between gap-2 p-2">
        {!isConnected ? (
          <Button size={'sm'} className="w-full" onClick={() => connect()}>
            <Bluetooth className="mr-2 h-4" />
            Verbinden
          </Button>
        ) : (
          <Button size={'sm'} className="w-full" onClick={() => disconnect()}>
            <BluetoothOff className="mr-2 h-4" />
            Trennen
          </Button>
        )}
        {!selectedBox ? (
          <WizardDrawer
            trigger={
              <Button size={'sm'} className="w-full" variant={'secondary'}>
                <UserCog2 className="mr-2 h-5" />
                Setup
              </Button>
            }
          />
        ) : isConnected ? (
          !isRecording ? (
            <Button
              size={'sm'}
              className="w-full"
              onClick={() => start()}
              variant={'secondary'}
            >
              <Circle className="mr-2 h-5 fill-red-500 text-red-500" />
              Aufzeichnen
            </Button>
          ) : (
            <>
              <Button
                size={'sm'}
                className="w-full"
                onClick={() => stop()}
                variant={'secondary'}
              >
                {isLoading && (
                  <UploadCloud className="mr-2 h-5 animate-pulse opacity-50" />
                )}
                {!isLoading && (
                  <Square className="mr-2 h-5 fill-red-500 text-red-500" />
                )}
                Stop
              </Button>
            </>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

function GridItem({
  name,
  value,
  labels,
  unit,
  areaProps,
}: {
  name: string
  value: number | (number | undefined)[] | undefined
  labels?: string[]
  unit: string
  areaProps: AreaChartProps
}) {
  const [selectedValue, setSelectedValue] = useState<number>()
  const [labelIndex, setLabelIndex] = useState<number>()

  useEffect(() => {
    if (value !== undefined && !Array.isArray(value)) {
      setSelectedValue(value)
    }
  }, [value])

  useEffect(() => {
    if (labels && labels.length > 0 && labelIndex === undefined) {
      setLabelIndex(0)
    }
  }, [labels])

  useEffect(() => {
    if (
      labels &&
      labels.length > 0 &&
      labelIndex !== undefined &&
      Array.isArray(value)
    ) {
      setSelectedValue(value[labelIndex])
    }
  }, [labelIndex, value])

  return (
    <div
      className="relative flex w-full flex-1 flex-col justify-between overflow-hidden p-2"
      onClick={() => {
        if (labelIndex !== undefined && labels && labels.length > 0) {
          setLabelIndex((labelIndex + 1) % labels!.length)
        }
      }}
    >
      {areaProps && areaProps.data.length > 2 && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
          <AreaChart
            className="h-full w-full opacity-50"
            showXAxis={false}
            showYAxis={false}
            showLegend={false}
            showGridLines={false}
            curveType="natural"
            showTooltip={false}
            colors={['slate']}
            {...areaProps}
          />
        </div>
      )}
      <div className="z-10 flex gap-1">
        <p className="text-xs font-semibold">{name}</p>
        {labels && labels.length > 0 && (
          <span className="rounded-full bg-primary px-1 py-0.5 text-[8px] font-semibold text-accent">
            {labels[labelIndex!]}
          </span>
        )}
      </div>
      <div className="z-10 flex flex-col text-2xl">
        {selectedValue === undefined && (
          <div className="my-1.5 h-5 animate-pulse rounded-full bg-accent" />
        )}
        {selectedValue !== undefined ? (
          <AnimatedNumber decimals={2}>{selectedValue}</AnimatedNumber>
        ) : null}
      </div>
      <p className="z-10 text-xs font-semibold">{unit}</p>
    </div>
  )
}
