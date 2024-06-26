import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Geolocation } from './geolocation'
import { Measurement } from './measurement'

@Entity()
export class Track {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('datetime')
  start: Date

  @Column('datetime', { nullable: true })
  end: Date | null

  @OneToMany(
    () => Measurement,
    measurement => measurement.track,
    {
      cascade: true,
    },
  )
  measurements: Measurement[]

  @OneToMany(
    () => Geolocation,
    geolocation => geolocation.track,
    {
      cascade: true,
    },
  )
  geolocations: Geolocation[]
}
