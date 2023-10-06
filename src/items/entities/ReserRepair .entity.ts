import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Reservation } from './Reservation.entity'; 
import { Repair } from './Repair.entity';

@Entity()
export class ReserRepair {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Reservation, resrvation => resrvation.reserrepair)
  resrvation: Reservation;

  @ManyToOne(() => Repair, repair => repair.Reserrepair)
  repair: Repair;

  @Column()
  status: string;

  @Column({ default: false })
  isFinish: boolean;

  @Column({ default: false })
  isStarted: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  commission: number;
}
