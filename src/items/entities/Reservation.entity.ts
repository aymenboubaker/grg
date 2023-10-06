import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { Payment } from './Payment.entity';
import { Availability } from './Availability.entity';
import { ReserRepair } from './ReserRepair .entity';
@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  idReservation: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: Date;

  @Column()
  isUser: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;
  @ManyToOne(() => Payment, payment => payment.reservation)
  payments: Payment[];
  @OneToOne(() => Availability, availability => availability.reservation)
  availability: Availability;
  @OneToMany(()=>ReserRepair,reserrepair=>reserrepair.resrvation)
  reserrepair : ReserRepair
}
