import AbstractSensor from './abstract-sensor'
import BaseSensor from './base-sensor'

export default class DistanceMatrixSensor<T extends [number]>
  extends BaseSensor<T>
  implements AbstractSensor<T>
{
  public static BLE_CHARACTERISTICS: string[] =
  [
    "7973afc7-e447-492c-a237-6a08c594b301",
    "7973afc7-e447-492c-a237-6a08c594b302",
    "7973afc7-e447-492c-a237-6a08c594b303",
    "7973afc7-e447-492c-a237-6a08c594b304",
    "7973afc7-e447-492c-a237-6a08c594b305",
    "7973afc7-e447-492c-a237-6a08c594b306",
    "7973afc7-e447-492c-a237-6a08c594b307",
    "7973afc7-e447-492c-a237-6a08c594b308",
    "7973afc7-e447-492c-a237-6a08c594b309",
    "7973afc7-e447-492c-a237-6a08c594b310",
    "7973afc7-e447-492c-a237-6a08c594b311",
    "7973afc7-e447-492c-a237-6a08c594b312",
    "7973afc7-e447-492c-a237-6a08c594b313",
    "7973afc7-e447-492c-a237-6a08c594b314",
    "7973afc7-e447-492c-a237-6a08c594b315",
    "7973afc7-e447-492c-a237-6a08c594b316"
  ];

  public static type: string = 'distance-matrix'

  parseData(data: DataView): T {
    const [distance] = this.parsePackages(data)

    return [distance] as T
  }
}