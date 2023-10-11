import { EntityRepository, Repository } from 'typeorm';
import { Availability} from '../entities/Availability.entity';


@EntityRepository(Availability)
export class AvailabilityRepository extends Repository<Availability> {

}