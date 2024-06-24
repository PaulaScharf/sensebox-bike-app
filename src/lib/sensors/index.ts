import AccelerometerSensor from './accelerometer'
import BaseSensor from './base-sensor'
import BatterySensor from './battery'
import FinedustSensor from './finedust'
import HumiditySensor from './humidity'
import OvertakingPredictionSensor from './overtaking-prediction'
import TemperatureSensor from './temperature'
import ToFSensor from './tof'
import DistanceMatrixSensor from './distance-matrix'
import DistanceMatrixSensorB from './distance-matrix-B'
import DistanceMatrixSensorC from './distance-matrix-C'
import DistanceMatrixSensorD from './distance-matrix-D'
import DistanceMatrixSensorE from './distance-matrix-E'
import DistanceMatrixSensorF from './distance-matrix-F'
import DistanceMatrixSensorG from './distance-matrix-G'
import DistanceMatrixSensorH from './distance-matrix-H'
import DistanceMatrixSensorI from './distance-matrix-I'
import DistanceMatrixSensorJ from './distance-matrix-J'
import DistanceMatrixSensorK from './distance-matrix-K'
import DistanceMatrixSensorL from './distance-matrix-L'
import DistanceMatrixSensorM from './distance-matrix-M'
import DistanceMatrixSensorN from './distance-matrix-N'
import DistanceMatrixSensorO from './distance-matrix-O'
import DistanceMatrixSensorP from './distance-matrix-P'
import DistanceMatrixSensorQ from './distance-matrix-Q'
import UltrasonicDistanceSensor from './ultrasonic-distance'

// This is a list of all sensors that are available in the application.
const sensors = [
  TemperatureSensor,
  HumiditySensor,
  AccelerometerSensor,
  UltrasonicDistanceSensor,
  OvertakingPredictionSensor,
  // ToFSensor,
  DistanceMatrixSensor,
  DistanceMatrixSensorB,
  DistanceMatrixSensorC,
  DistanceMatrixSensorD,
  DistanceMatrixSensorE,
  DistanceMatrixSensorF,
  DistanceMatrixSensorG,
  DistanceMatrixSensorH,
  DistanceMatrixSensorI,
  DistanceMatrixSensorJ,
  DistanceMatrixSensorK,
  DistanceMatrixSensorL,
  DistanceMatrixSensorM,
  DistanceMatrixSensorN,
  DistanceMatrixSensorO,
  DistanceMatrixSensorP,
  DistanceMatrixSensorQ,
  FinedustSensor,
  BatterySensor,
]

export const characteristicRegistry: Record<
  string,
  typeof BaseSensor<number[]> | typeof ToFSensor
> = sensors.reduce(
  (acc, sensor) => ({ ...acc, [sensor.BLE_CHARACTERISTIC]: sensor }),
  {},
)
