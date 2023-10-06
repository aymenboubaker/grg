import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Repair } from './Repair.entity';
import { GarageService } from './GarageService.entity';
import { GarageRegion } from './garageRegion.entity';

@Entity()
export class Garage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => GarageService, (garageService) => garageService.garage)
  garageServices: GarageService[];

  @OneToMany(() => Repair, (repair) => repair.garage)
  repairs: Repair[];

  @OneToMany(() => GarageRegion, (garageRegion) => garageRegion.garage)
  garageRegions: GarageRegion[];
}
