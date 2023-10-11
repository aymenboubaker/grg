import { EntityRepository, Repository } from 'typeorm';
import { Garage} from '../entities/Garage.entity';


@EntityRepository(Garage)
export class GarageRepository extends Repository<Garage> {

}