import accelerometer from './accelerometer'
import battery from './battery'
import finedust from './finedust'
import humidity from './humidity'
import overtaking from './overtaking'
import distance_matrix from './distance-matrix'
import temperature from './temperature'
import ultrasonic from './ultrasonic-distance-sensor'

export interface Sensor {
  uuid: string
  Component: React.ReactNode
}

// This is a list of all sensors that are available in the application.
const sensors = [
  temperature,
  humidity,
  ultrasonic,
  accelerometer,
  finedust,
  overtaking,
  battery,
  // distance_matrix[0],
  // distance_matrix[1],
  // distance_matrix[2],
  // distance_matrix[3],
  // distance_matrix[4],
  // distance_matrix[5],
  // distance_matrix[6],
  // distance_matrix[7],
  // distance_matrix[8],
  // distance_matrix[9],
  // distance_matrix[10],
  // distance_matrix[11],
  // distance_matrix[12],
  // distance_matrix[13],
  // distance_matrix[14],
  // distance_matrix[15],
]

export const sensorRegistry: Record<string, React.ReactNode> = sensors.reduce(
  (acc, sensor) => ({ ...acc, [sensor.uuid]: sensor.Component }),
  {},
)
