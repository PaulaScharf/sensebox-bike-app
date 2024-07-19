import OvertakingPredictionSensor from '@/lib/sensors/overtaking-prediction'
import { Sensor } from '.'
import SensorView from './sensor-view'
import i18n from '@/i18n'

const overtaking: Sensor = {
  uuid: OvertakingPredictionSensor.BLE_CHARACTERISTIC,
  Component: (
    <SensorView
      characteristic={OvertakingPredictionSensor.BLE_CHARACTERISTIC}
      rawValueToValue={({ measurement }) => [
        (measurement[0] as number) * 100,
        (measurement[1] as number) * 100,
      ]}
      rawHistoryValuesToData={values =>
        values.map(v => ({
          x: v.timestamp,
          car: (v.measurement[0] as number) * 100,
          bike: (v.measurement[1] as number) * 100,
        }))
      }
      name={'overtaking'}
      unit={'%'}
      labels={[i18n.t('phenomena.overtaking_car'), i18n.t('phenomena.overtaking_bike')]}
      chartProps={{
        index: 'x',
        categories: ['car', 'bike'],
        colors: ['pink', 'blue'],
        maxValue: 100,
        minValue: 0,
      }}
    />
  ),
}

export default overtaking
