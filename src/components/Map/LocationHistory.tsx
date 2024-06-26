import { senseBoxDataRecord } from '@/lib/store/useSenseBoxValuesStore'
import { Layer, Source } from 'react-map-gl'

export default function LocationHistory({
  values,
}: {
  values: senseBoxDataRecord[]
}) {
  return (
    <>
      <Source
        id="location-history"
        type="geojson"
        data={{
          type: 'LineString',
          coordinates: values
            .filter(value => value.gps_lng && value.gps_lat)
            .map(value => [value.gps_lng!, value.gps_lat!]),
        }}
      >
        <Layer
          id="history"
          type="line"
          paint={{
            'line-color': '#007cbf',
            'line-width': 2,
          }}
        />
      </Source>
    </>
  )
}
