// src/reviews/review.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  idReview: number;

  @Column()
  comment: string;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;
}
