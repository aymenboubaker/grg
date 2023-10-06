import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Region } from './Region.entity';
import { Remise } from './Remise.entity';
import { Availability } from './Availability.entity';
import { Garage } from './garage.entity';

@Entity()
export class GarageRegion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Region, region => region.garageRegions)
  region: Region;

  @OneToMany(() => Remise, remise => remise.garageRegion)
  remise: Remise[];

  @OneToOne(() => Availability, availability => availability.garageregion)
  availability: Availability;

  @ManyToOne(() => Garage, garage => garage.garageRegions)
  garage: Garage;
}
