import AbstractSensor from './abstract-sensor'
import BaseSensor from './base-sensor'

export default class UltrasonicDistanceSensor<T extends [number]>
  extends BaseSensor<T>
  implements AbstractSensor<T>
{
  public static BLE_CHARACTERISTIC: string =
    'B3491B60-C0F3-4306-A30D-49C91F37A62B'

  public static type: string = 'distance'

  parseData(data: DataView): T {
    const [distance] = this.parsePackages(data)

    return [distance] as T
  }
}
