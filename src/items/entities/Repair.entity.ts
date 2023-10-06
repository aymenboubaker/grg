import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Garage } from './garage.entity';
import { Region } from './Region.entity';
import { Services } from './Services.entity';
import { Car } from './Car.entity';
import { ReserRepair } from './ReserRepair .entity';

@Entity()
export class Repair {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Services, service => service.repairs)
  service: Services;

  @ManyToOne(() => Car, car => car.repairs)
  car: Car;

  @ManyToOne(() => Garage, garage => garage.repairs)
  garage: Garage;

  @ManyToOne(() => Region, region => region.repairs)
  region: Region;
  @OneToMany(()=>ReserRepair,Reserrepair=>Reserrepair.repair)
  Reserrepair : ReserRepair [] 

  @Column()
  numberOfHours: number;

  @Column()
  repairPrice: number;

  @Column()
  isValidated: boolean;
}
