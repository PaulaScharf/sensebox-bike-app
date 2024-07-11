import AnomalySensor from '@/lib/sensors/anomaly'
import { Sensor } from '.'
import SensorView from './sensor-view'

const humidity: Sensor = {
  uuid: AnomalySensor.BLE_CHARACTERISTIC,
  Component: (
    <SensorView
      characteristic={AnomalySensor.BLE_CHARACTERISTIC}
      rawValueToValue={value => value.measurement[0]}
      rawHistoryValuesToData={values =>
        values.map(v => ({ x: v.timestamp, y: v.measurement[0] }))
      }
      name={'anomaly'}
      unit={'?'}
      chartProps={{
        index: 'x',
        categories: ['y'],
      }}
    />
  ),
}

export default humidity
