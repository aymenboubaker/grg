import { EntityRepository, Repository } from 'typeorm';
import { Car} from '../entities/Car.entity';


@EntityRepository(Car)
export class CarRepository extends Repository<Car> {

}