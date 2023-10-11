import { EntityRepository, Repository } from 'typeorm';
import { Repair } from '../entities/Repair.entity';


@EntityRepository(Repair)
export class RepairRepository extends Repository<Repair> {

}