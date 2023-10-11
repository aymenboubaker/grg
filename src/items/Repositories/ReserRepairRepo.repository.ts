import { EntityRepository, Repository } from 'typeorm';
import { ReserRepair  } from '../entities/ReserRepair .entity';


@EntityRepository(ReserRepair )
export class ReserRepairRepository extends Repository<ReserRepair> {

}