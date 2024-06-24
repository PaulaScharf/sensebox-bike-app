import AbstractSensor from './abstract-sensor'
import BaseSensor from './base-sensor'

export default class DistanceMatrixSensorP<T extends [number,number,number,number]>
  extends BaseSensor<T>
  implements AbstractSensor<T>
{
  public static BLE_CHARACTERISTICS: string[] =
  [
    'B944AF10-F495-4560-968F-2F0D18CAB522',
    'B944AF10-F495-4560-968F-2F0D18CAB524',
    'B944AF10-F495-4560-968F-2F0D18CAB525',
    'B944AF10-F495-4560-968F-2F0D18CAB526',
    'B944AF10-F495-4560-968F-2F0D18CAB527',
    'B944AF10-F495-4560-968F-2F0D18CAB528',
    'B944AF10-F495-4560-968F-2F0D18CAB529',
    'B944AF10-F495-4560-968F-2F0D18CAB530',
    'B944AF10-F495-4560-968F-2F0D18CAB531',
    'B944AF10-F495-4560-968F-2F0D18CAB532',
    'B944AF10-F495-4560-968F-2F0D18CAB533',
    'B944AF10-F495-4560-968F-2F0D18CAB534',
    'B944AF10-F495-4560-968F-2F0D18CAB535',
    'B944AF10-F495-4560-968F-2F0D18CAB536',
    'B944AF10-F495-4560-968F-2F0D18CAB537',
    'B944AF10-F495-4560-968F-2F0D18CAB538'
  ];

  public static BLE_CHARACTERISTIC: string =
    'B944AF10-F495-4560-968F-2F0D18CAB537'

  public static type: string = 'distance_matrix'
  public static attributes: string[] = ['distanceA', 'distanceB', 'distanceC', 'distanceD']

  parseData(data: DataView): T {
    const [distanceA, distanceB, distanceC, distanceD] = this.parsePackages(data)

    return [distanceA, distanceB, distanceC, distanceD] as T
  }
}