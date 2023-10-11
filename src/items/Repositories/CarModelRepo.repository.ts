import { EntityRepository, Repository } from 'typeorm';
import { CarModel} from '../entities/CarModel.entity';


@EntityRepository(CarModel)
export class CarModelRepository extends Repository<CarModel> {

}