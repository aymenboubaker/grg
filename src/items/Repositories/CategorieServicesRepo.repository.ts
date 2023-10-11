import { EntityRepository, Repository } from 'typeorm';
import { CategoryService} from '../entities/CategorieServices.entity';


@EntityRepository(CategoryService)
export class CategoryServiceRepository extends Repository<CategoryService> {

}
