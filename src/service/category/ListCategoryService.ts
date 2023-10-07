import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

class ListCategoryService {
  async execute() {
    const listCategory = getCustomRepository(CategoriesRepositories);

    const category = await listCategory.find();

    return category;
  }
}

export { ListCategoryService };
