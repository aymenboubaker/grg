import { EntityRepository, Repository } from 'typeorm';
import { CarGarage} from '../entities/carGarage.entity';


@EntityRepository(CarGarage)
export class CarGarageRepository extends Repository<CarGarage> {

}