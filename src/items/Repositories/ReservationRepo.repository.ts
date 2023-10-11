import { EntityRepository, Repository } from 'typeorm';
import { Reservation} from '../entities/Reservation.entity';


@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation> {

}