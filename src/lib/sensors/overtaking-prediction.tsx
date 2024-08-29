import AbstractSensor from './abstract-sensor'
import BaseSensor from './base-sensor'

export default class OvertakingPredictionSensor<T extends [number, number]>
  extends BaseSensor<T>
  implements AbstractSensor<T>
{
  public static BLE_CHARACTERISTIC: string =
    'FC01C688-2C44-4965-AE18-373AF9FED18D'

  public static type: string = 'overtaking'
  public static attributes: string[] = ['overtaking_car', 'overtaking_bike']

  parseData(data: DataView): T {
    const [overtaking_car, overtaking_bike] = this.parsePackages(data)

    return [overtaking_car, overtaking_bike] as T
  }
}
