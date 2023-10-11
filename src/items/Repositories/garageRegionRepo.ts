import { EntityRepository, Repository } from 'typeorm';
import { GarageRegion } from '../entities/garageRegion.entity';


@EntityRepository(GarageRegion)
export class GarageRegionRepository extends Repository<GarageRegion> {

}