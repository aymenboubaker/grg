import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Reservation } from './Reservation.entity'; 

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  PaymentID: number;

  @Column()
  totalpayment: number;

  @Column({ type: 'date' })
  DatePaiement: Date;

  @Column()
  commision: number;

  @Column()
  totalTogareg: number;

  @ManyToOne(() => Reservation, reservation => reservation.payments)
  reservation: Reservation;
}