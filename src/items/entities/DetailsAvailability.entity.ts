// details-availability.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Availability } from './Availability.entity';

@Entity()
export class DetailsAvailability {
  @PrimaryGeneratedColumn()
  idDetailsAvailability: number;

  @Column({ type: 'date' })
  dateAvailability: Date;

  @Column({ type: 'time' })
  startDate: string;

  @Column({ type: 'time' })
  endDate: string;

  @ManyToOne(() => Availability, availability => availability.detailsAvailabilities)
  availability: Availability;
}
