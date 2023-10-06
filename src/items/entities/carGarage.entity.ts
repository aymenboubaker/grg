
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Car } from './Car.entity';

@Entity()
export class CarGarage {
  @PrimaryGeneratedColumn()
  idCarGarage: number;

  @Column()
  idCar: number;

  @Column()
  idGarage: number;

  @Column()
  repairPrice: number;

  @OneToMany(() => CarGarage, (CarGarage) => CarGarage.cars)
  cars: Car[];
}
