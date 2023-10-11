import { EntityRepository, Repository } from 'typeorm';
import { Remise } from '../entities/Remise.entity';


@EntityRepository(Remise)
export class RemiseRepository extends Repository<Remise> {

}