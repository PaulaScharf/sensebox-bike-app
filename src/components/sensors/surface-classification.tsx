import SurfaceClassificationSensor from '@/lib/sensors/surface-classification'
import { useTranslation } from 'react-i18next'
import { Sensor } from '.'
import { CategoryBar } from '../charts/category-bar'
import SensorView from './sensor-view'

const surfaceClassification: Sensor = {
  uuid: SurfaceClassificationSensor.BLE_CHARACTERISTIC,
  Component: (
    <SensorView
      characteristic={SurfaceClassificationSensor.BLE_CHARACTERISTIC}
      rawValueToValue={({ measurement }) => [
        measurement[0] as number,
        measurement[1] as number,
        measurement[2] as number,
      ]}
      rawHistoryValuesToData={values =>
        values.map(v => ({
          x: v.timestamp,
          acceleration_x: v.measurement[0],
          acceleration_y: v.measurement[1],
          acceleration_z: v.measurement[2],
        }))
      }
      name={'accelerometer'}
      unit={'m/s²'}
      labels={['X', 'Y', 'Z']}
      chartProps={{
        index: 'x',
        categories: ['acceleration_x', 'acceleration_y', 'acceleration_z'],
        colors: ['blue', 'cyan', 'amber'],
      }}
      customComponent={value => {
        const [asphalt, compacted, paving, sett, standing] =
          (value?.measurement as [number, number, number, number, number]) ?? [
            0, 0, 0, 0, 0,
          ]

        const { t } = useTranslation('translation', { keyPrefix: 'surface' })

        return (
          <div className="flex flex-col justify-around h-full">
            <div className="grid gap-0.5">
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-blue-500 text-xs px-1">
                  {asphalt.toFixed(2)}
                </div>
                <span className="text-sm">{t('asphalt')}</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-emerald-500 text-xs px-1">
                  {compacted.toFixed(2)}
                </div>
                <span className="text-sm">{t('compacted')}</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-violet-500 text-xs px-1">
                  {paving.toFixed(2)}
                </div>
                <span className="text-sm">{t('paving')}</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-amber-500 text-xs px-1">
                  {sett.toFixed(2)}
                </div>
                <span className="text-sm">{t('sett')}</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-gray-500 text-xs px-1">
                  {standing.toFixed(2)}
                </div>
                <span className="text-sm">{t('standing')}</span>
              </div>
            </div>
            <CategoryBar
              values={[asphalt, compacted, paving, sett, standing]}
              showLabels={false}
            />
          </div>
        )
      }}
    />
  ),
}

export default surfaceClassification
