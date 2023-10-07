import { Entity, PrimaryGeneratedColumn, Column, ManyToOne ,OneToMany } from 'typeorm';
import { CarVersion } from './CarVersion.entity';
import { Repair } from './Repair.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  engineCode: string;

  @Column()
  immatriculation: string;

  @Column()
  generation: string;

  @Column()
  cylinders: number;

  @Column()
  kilowatts: number;a

  @Column()
  chdin: string;

  @Column()
  fuelName: string;

  @ManyToOne(() => CarVersion, carVersion => carVersion.cars)
  carVersion: CarVersion;

//   @OneToMany(() => Repair, repair => repair.car) // Relation avec Repair
//   repairs: Repair[]; // Assurez-vous que cette propriété est définie

@OneToMany(() => Repair, repair => repair.car)
repairs: Repair[];

}
