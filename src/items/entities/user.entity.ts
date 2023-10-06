// src/users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Review } from './review.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
