import DistanceMatrixSensor from '@/lib/sensors/distance-matrix'
import { Sensor } from '.'
import SensorView from './sensor-view'

const distance_matrix: Sensor[] = [{
  uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[0],
  Component: (
    <SensorView
      characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[0]}
      rawValueToValue={({ measurement }) => [
        measurement[0] as number,
        measurement[1] as number,
        measurement[2] as number,
        measurement[3] as number,
      ]}
      rawHistoryValuesToData={values =>
        values.map(v => ({
          x: v.timestamp,
          dist_1: v.measurement[0],
          dist_2: v.measurement[1],
          dist_3: v.measurement[2],
          dist_4: v.measurement[3],
        }))
      }
      name={'Distance-Matrix-A'}
      unit={'mm'}
      labels={['1', '2', '3', '4']}
      chartProps={{
        index: 'x',
        categories: ['1', '2', '3', '4'],
        colors: ['indigo', 'cyan', 'amber','green'],
      }}
    />
  ),
},{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[1],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[1]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[2],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[2]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[3],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[3]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[4],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[4]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[5],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[5]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[6],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[6]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[7],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[7]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[8],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[8]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[9],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[9]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[10],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[10]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[11],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[11]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[12],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[12]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[13],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[13]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[14],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[14]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: DistanceMatrixSensor.BLE_CHARACTERISTICS[15],
    Component: (
      <SensorView
        characteristic={DistanceMatrixSensor.BLE_CHARACTERISTICS[15]}
        rawValueToValue={({ measurement }) => [
          measurement[0] as number,
          measurement[1] as number,
          measurement[2] as number,
          measurement[3] as number,
        ]}
        rawHistoryValuesToData={values =>
          values.map(v => ({
            x: v.timestamp,
            dist_1: v.measurement[0],
            dist_2: v.measurement[1],
            dist_3: v.measurement[2],
            dist_4: v.measurement[3],
          }))
        }
        name={'Distance-Matrix-A'}
        unit={'mm'}
        labels={['1', '2', '3', '4']}
        chartProps={{
          index: 'x',
          categories: ['1', '2', '3', '4'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  }]

export default distance_matrix