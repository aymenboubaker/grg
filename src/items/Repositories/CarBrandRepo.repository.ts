import { EntityRepository, Repository } from 'typeorm';
import { CarBrand} from '../entities/CarBrand.entity';


@EntityRepository(CarBrand)
export class CarBrandRepository extends Repository<CarBrand> {

}