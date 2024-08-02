export type senseBoxBikeModel = 'default' | 'atrai'

export const senseBoxBikeModelFactory = (
  name: string,
  longitude: number,
  latitude: number,
  grouptag?: string,
  model: senseBoxBikeModel = 'default',
) => {
  const baseProperties = {
    name: name,
    exposure: 'mobile',
    location: [longitude, latitude],
    grouptag: [grouptag ?? 'bike'],
  }
  return {
    ...baseProperties,
    sensors: sensors[model],
  }
}

const sensors: Record<
  senseBoxBikeModel,
  {
    id: number
    icon: string
    title: string
    unit: string
    sensorType: string
  }[]
> = {
  default: [
    {
      id: 0,
      icon: 'osem-thermometer',
      title: 'Temperature',
      unit: '°C',
      sensorType: 'HDC1080',
    },
    {
      id: 1,
      icon: 'osem-humidity',
      title: 'Rel. Humidity',
      unit: '%',
      sensorType: 'HDC1080',
    },
    {
      id: 2,
      icon: 'osem-cloud',
      title: 'Finedust PM1',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 3,
      icon: 'osem-cloud',
      title: 'Finedust PM2.5',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 4,
      icon: 'osem-cloud',
      title: 'Finedust PM4',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 5,
      icon: 'osem-cloud',
      title: 'Finedust PM10',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 6,
      icon: 'osem-signal',
      title: 'Distance Left',
      unit: 'cm',
      sensorType: 'HC-SR04',
    },
    {
      id: 7,
      icon: 'osem-shock',
      title: 'Acceleration X',
      unit: 'm/s²',
      sensorType: 'MPU-6050',
    },
    {
      id: 8,
      icon: 'osem-shock',
      title: 'Acceleration Y',
      unit: 'm/s²',
      sensorType: 'MPU-6050',
    },
    {
      id: 9,
      icon: 'osem-shock',
      title: 'Acceleration Z',
      unit: 'm/s²',
      sensorType: 'MPU-6050',
    },
    {
      id: 10,
      icon: 'osem-dashboard',
      title: 'Speed',
      unit: 'km/h',
      sensorType: 'GPS',
    },
  ],
  atrai: [
    {
      id: 0,
      icon: 'osem-thermometer',
      title: 'Temperature',
      unit: '°C',
      sensorType: 'HDC1080',
    },
    {
      id: 1,
      icon: 'osem-humidity',
      title: 'Rel. Humidity',
      unit: '%',
      sensorType: 'HDC1080',
    },
    {
      id: 2,
      icon: 'osem-cloud',
      title: 'Finedust PM1',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 3,
      icon: 'osem-cloud',
      title: 'Finedust PM2.5',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 4,
      icon: 'osem-cloud',
      title: 'Finedust PM4',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 5,
      icon: 'osem-cloud',
      title: 'Finedust PM10',
      unit: 'µg/m³',
      sensorType: 'SPS30',
    },
    {
      id: 6,
      icon: 'osem-shock',
      title: 'Overtaking Manoeuvre',
      unit: '%',
      sensorType: 'VL53L8CX',
    },
    {
      id: 7,
      icon: 'osem-shock',
      title: 'Distance Left',
      unit: 'cm',
      sensorType: 'VL53L8CX',
    },
    {
      id: 8,
      icon: 'osem-shock',
      title: 'Acceleration X',
      unit: 'm/s²',
      sensorType: 'MPU-6050',
    },
    {
      id: 9,
      icon: 'osem-shock',
      title: 'Acceleration Y',
      unit: 'm/s²',
      sensorType: 'MPU-6050',
    },
    {
      id: 10,
      icon: 'osem-shock',
      title: 'Acceleration Z',
      unit: 'm/s²',
      sensorType: 'MPU-6050',
    },
    {
      id: 11,
      icon: 'osem-dashboard',
      title: 'Speed',
      unit: 'm/s',
      sensorType: 'GPS',
    },
  ],
}
