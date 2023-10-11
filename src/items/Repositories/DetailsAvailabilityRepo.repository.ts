import { EntityRepository, Repository } from 'typeorm';
import { DetailsAvailability} from '../entities/DetailsAvailability.entity';


@EntityRepository(DetailsAvailability)
export class DetailsAvailabilityRepository extends Repository<DetailsAvailability> {

}