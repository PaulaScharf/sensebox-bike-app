export default abstract class AbstractSensor<T> {
  public static BLE_CHARACTERISTIC: string
  public static type: string
  public static attributes?: string[]

  abstract parseData(data: DataView): T
}
