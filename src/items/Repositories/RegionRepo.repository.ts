import { EntityRepository, Repository } from 'typeorm';
import { Region } from '../entities/Region.entity';


@EntityRepository(Region)
export class RegionRepository extends Repository<Region> {

}