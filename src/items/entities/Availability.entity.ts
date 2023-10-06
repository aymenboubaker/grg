import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { DetailsAvailability } from './DetailsAvailability.entity';
import { GarageRegion } from './garageRegion.entity';
import { Reservation } from './Reservation.entity';
@Entity()
export class Availability {
  @PrimaryGeneratedColumn()
  idGarageRegion: number;


  @PrimaryGeneratedColumn()
  idDetailsAvailability: number;

  @OneToMany(() => DetailsAvailability, detailsAvailability => detailsAvailability.availability)
  detailsAvailabilities: DetailsAvailability[];
  @OneToOne(()=>GarageRegion,garageregion => garageregion.availability) 
  garageregion : GarageRegion
  @OneToOne (()=>Reservation,reservation =>reservation.availability)
  reservation : Reservation
}
