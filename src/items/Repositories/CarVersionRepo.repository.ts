import { EntityRepository, Repository } from 'typeorm';
import { CarVersion} from '../entities/CarVersion.entity';


@EntityRepository(CarVersion)
export class CarVersionRepository extends Repository<CarVersion> {

}
