import { execSync } from 'child_process'
import { CapacitorConfig } from '@capacitor/cli'

console.log(process.env.NODE_ENV)

let ipAddress

if (process.env.NODE_ENV !== 'production') {
  ipAddress = '192.168.2.154'
}

const server =
  process.env.NODE_ENV === 'production'
    ? undefined
    : {
        url: `http://${ipAddress}:5173`,
        cleartext: true,
      }

const config: CapacitorConfig = {
  appId: 'de.reedu.senseboxbike',
  appName: 'senseBox:Bike',
  webDir: 'dist',
  server,
  android: {
    useLegacyBridge: true,
  },
  plugins: {
    CapacitorSQLite: {},
  },
}

export default config
