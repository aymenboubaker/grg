import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { CategoryService } from './CategorieServices.entity';
import { Repair } from './Repair.entity';
import { Remise } from './Remise.entity';
import { GarageService } from './GarageService.entity';
@Entity()
export class Services {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CategoryService, categoryService => categoryService.services)
  categoryService: CategoryService;

  @OneToMany(() => Repair, repair => repair.service)
  repairs: Repair[];

  @ManyToMany(() => Remise)
 
  remise: Remise[]; 

  @OneToMany(() => GarageService, garageservice => garageservice.service)
  garageServices: GarageService[];

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isService: boolean;
}
