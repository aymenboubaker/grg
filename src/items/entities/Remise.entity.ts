import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Services } from './Services.entity';
import { GarageRegion } from './garageRegion.entity'; 

@Entity()
export class Remise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'idGarageRegion' })
  idGarageRegion: number;

  @Column({ name: 'idService' })
  idService: number;

  @Column({ type: 'date', name: 'startDate' })
  startDate: Date;

  @Column({ type: 'date', name: 'endDate' })
  endDate: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  percentage: number;

  @ManyToOne(() => Services, (service) => service.remise)

  service: Services;

  @ManyToOne(() => GarageRegion, garageRegion => garageRegion.remise)
  garageRegion: GarageRegion;
}
