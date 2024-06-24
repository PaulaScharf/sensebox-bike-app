import { Sensor } from '.'
import SensorView from './sensor-view'

const distance_matrix: Sensor[] = [{
  uuid: 'B944AF10-F495-4560-968F-2F0D18CAB523',
  Component: (
    <SensorView
      characteristic={'B944AF10-F495-4560-968F-2F0D18CAB523'}
      rawValueToValue={({ measurement }) => [
        measurement[0] as number,
        measurement[1] as number,
        measurement[2] as number,
      ]}
      rawHistoryValuesToData={values =>
        values.map(v => ({
          x: v.timestamp,
          dist_1: v.measurement[0],
          dist_2: v.measurement[1],
          dist_3: v.measurement[2],
        }))
      }
      name={'Distance-Matrix-A'}
      unit={'mm'}
      labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
      chartProps={{
        index: 'x',
        categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
        colors: ['indigo', 'cyan', 'amber'],
      }}
    />
  ),
},{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB524',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB524'}
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
        name={'Distance-Matrix-B'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB525',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB525'}
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
        name={'Distance-Matrix-C'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB526',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB526'}
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
        name={'Distance-Matrix-D'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB527',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB527'}
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
        name={'Distance-Matrix-E'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB528',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB528'}
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
        name={'Distance-Matrix-F'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB529',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB529'}
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
        name={'Distance-Matrix-G'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB530',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB530'}
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
        name={'Distance-Matrix-H'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB531',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB531'}
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
        name={'Distance-Matrix-I'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB532',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB532'}
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
        name={'Distance-Matrix-J'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB533',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB533'}
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
        name={'Distance-Matrix-K'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB534',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB534'}
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
        name={'Distance-Matrix-L'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB535',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB535'}
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
        name={'Distance-Matrix-M'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB536',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB536'}
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
        name={'Distance-Matrix-N'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB537',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB537'}
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
        name={'Distance-Matrix-O'}
        unit={'mm'}
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  },{
    uuid: 'B944AF10-F495-4560-968F-2F0D18CAB538',
    Component: (
      <SensorView
        characteristic={'B944AF10-F495-4560-968F-2F0D18CAB538'}
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
        labels={['distanceA', 'distanceB', 'distanceC', 'distanceD']}
        chartProps={{
          index: 'x',
          categories: ['distanceA', 'distanceB', 'distanceC', 'distanceD'],
          colors: ['indigo', 'cyan', 'amber','green'],
        }}
      />
    ),
  }]

export default distance_matrix