import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Services } from './Services.entity';

@Entity()
export class CategoryService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  designation: string;

  @OneToMany(() => Services, service => service.categoryService)
  services: Services[];
}
