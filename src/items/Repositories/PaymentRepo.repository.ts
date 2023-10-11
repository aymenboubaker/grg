import { EntityRepository, Repository } from 'typeorm';
import { Payment } from '../entities/Payment.entity';


@EntityRepository(Payment)
export class PaymentRepository extends Repository<Payment> {

}