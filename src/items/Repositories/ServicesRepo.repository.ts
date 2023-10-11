import { EntityRepository, Repository } from 'typeorm';
import { Services } from '../entities/Services.entity';


@EntityRepository(Services)
export class ServicesRepository extends Repository<Services> {

}