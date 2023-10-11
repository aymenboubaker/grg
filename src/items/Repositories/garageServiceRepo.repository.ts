import { EntityRepository, Repository } from 'typeorm';
import { GarageService } from '../entities/garageService.entity';


@EntityRepository(GarageService)
export class GarageServiceRepository extends Repository<GarageService> {

}