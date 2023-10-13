import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

class ListCategoryService {
  async execute() {
    const listCategory = getCustomRepository(CategoriesRepositories);

    const category = await listCategory.find({
      select: ['id', 'name'],
    });

    if (category.length == 0) return 'Empty List';

    return category;
  }
}

export { ListCategoryService };
