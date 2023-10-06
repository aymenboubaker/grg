import { Entity, PrimaryGeneratedColumn, Column, ManyToOne ,OneToMany } from 'typeorm';
import { CarModel } from './CarModel.entity';
import { Car } from './Car.entity';

@Entity()
export class CarVersion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  versionName: string;

  @Column()
  dateFrom: Date;

  @Column()
  dateTo: Date;

  @ManyToOne(() => CarModel, carModel => carModel.carVersions)
  carModel: CarModel;

  @OneToMany(() => Car, car => car.carVersion)
  cars: Car[];
}
