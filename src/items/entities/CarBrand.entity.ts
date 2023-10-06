import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CarModel } from './CarModel.entity';

@Entity()
export class CarBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brandName: string;

  @OneToMany(() => CarModel, carModel => carModel.carBrand)
  carModels: CarModel[];
}
