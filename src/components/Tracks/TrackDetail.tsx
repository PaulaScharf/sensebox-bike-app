import { Track } from '@/lib/store/useTracksStore'
import downloadTrack from '@/lib/track-download'
import { format, formatDuration, intervalToDuration, parseISO } from 'date-fns'
import { de } from 'date-fns/locale'
import {
  ClockIcon,
  DownloadIcon,
  DropletsIcon,
  GaugeIcon,
  RouteIcon,
  RulerIcon,
  ThermometerIcon,
} from 'lucide-react'
import LocationHistory from '../Map/LocationHistory'
import Map from '../Map/Map'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import SliderDrawer from '../ui/slider-drawer'
import { toast } from '../ui/use-toast'
import DeleteTrackDialog from './DeleteTrackDialog'
import { getBBox, getDistance } from './track-lib'

export default function TrackDetail({ track }: { track: Track }) {
  async function handleTrackDownload() {
    try {
      await downloadTrack(track.id)
    } catch (error: any) {
      if (error.message === 'Share canceled') return

      toast({
        title: 'Fehler',
        description: 'Fehler beim Download des Tracks',
      })
    }
  }
  return (
    <SliderDrawer
      key={track.id}
      trigger={
        <Card className="flex h-fit overflow-hidden">
          <div className="relative h-40 flex-1">
            <Map
              interactive={false}
              initialViewState={{
                // @ts-ignore
                bounds: getBBox(track),
              }}
            >
              <LocationHistory values={track.measurements} />
            </Map>
            <div className="absolute left-0 top-0 w-fit rounded-br-md bg-background px-4 py-2">
              {format(parseISO(track.start), 'PPpp', {
                locale: de,
              })}
            </div>
          </div>
        </Card>
      }
    >
      <div className="mx-auto flex max-w-md flex-col gap-2">
        <div>
          {track.start && track.end && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Dauer</CardTitle>
                <ClockIcon className="h-6 w-6" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">
                  {formatDuration(
                    intervalToDuration({
                      start: parseISO(track.start),
                      end: parseISO(track.end),
                    }),
                    {
                      locale: de,
                    },
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Start:{' '}
                  {format(parseISO(track.start), 'PPpp', {
                    locale: de,
                  })}
                  <br />
                  Ende:{'   '}
                  {format(parseISO(track.end), 'PPpp', {
                    locale: de,
                  })}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
        <Card className="h-40 w-full overflow-hidden rounded-md">
          <Map
            interactive={false}
            initialViewState={{
              // @ts-ignore
              bounds: getBBox(track),
            }}
          >
            <LocationHistory values={track.measurements} />
          </Map>
        </Card>
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Distanz</CardTitle>
              <RouteIcon className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">
                {getDistance(track).toFixed(2)}{' '}
                <span className="text-base font-normal">km</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ø Speed</CardTitle>
              <GaugeIcon className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">
                {(
                  track.measurements.reduce((p, c) => p + c.gps_spd!, 0) /
                  track.measurements.length
                ).toFixed(2)}{' '}
                <span className="text-base font-normal">km/h</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperatur</CardTitle>
              <ThermometerIcon className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">
                {(
                  track.measurements.reduce((p, c) => p + c.temperature!, 0) /
                  track.measurements.length
                ).toFixed(2)}{' '}
                <span className="text-base font-normal">°C</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Luftfeuchte</CardTitle>
              <DropletsIcon className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">
                {(
                  track.measurements.reduce((p, c) => p + c.humidity!, 0) /
                  track.measurements.length
                ).toFixed(2)}{' '}
                <span className="text-base font-normal">%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Abstand</CardTitle>
              <RulerIcon className="h-6 w-6" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">
                {(
                  track.measurements.reduce((p, c) => p + c.distance_l!, 0) /
                  track.measurements.length
                ).toFixed(2)}{' '}
                <span className="text-base font-normal">cm</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <hr className="my-2" />
        <div className="flex w-full gap-2">
          <Button
            variant={'outline'}
            className="flex-1"
            onClick={handleTrackDownload}
          >
            <DownloadIcon className="mr-2 h-5" />
            Download
          </Button>
          <DeleteTrackDialog track={track} />
        </div>
      </div>
    </SliderDrawer>
  )
}