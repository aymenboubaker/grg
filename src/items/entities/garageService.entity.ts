// garage.service.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Garage } from './garage.entity';
import { Services } from './Services.entity';

@Entity()
export class GarageService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Garage, garage => garage.garageServices)
  garage: Garage []

  @ManyToOne(() => Services, service => service.garageServices)
  service: Services;
}
