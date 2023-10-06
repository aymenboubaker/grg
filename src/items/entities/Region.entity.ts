import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Repair } from './Repair.entity';
import { GarageRegion } from './garageRegion.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  regionName: string;

  @OneToMany(() => Repair, repair => repair.region)
  repairs: Repair[];

  @OneToMany(() => GarageRegion, garageRegion => garageRegion.region)
  garageRegions: GarageRegion[];
}
