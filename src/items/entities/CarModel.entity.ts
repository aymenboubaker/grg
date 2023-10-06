import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { CarBrand } from './CarBrand.entity';
import { CarVersion } from './CarVersion.entity';

@Entity()
export class CarModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelName: string;

  @ManyToOne(() => CarBrand, carBrand => carBrand.carModels)
  carBrand: CarBrand;

  @OneToMany(() => CarVersion, carVersion => carVersion.carModel)
  carVersions: CarVersion[];
}
