import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

interface CategoryRequest {
  id: string;
}

class DeleteCategoryService {
  async execute({ id }: CategoryRequest) {
    const deleteCategory = getCustomRepository(CategoriesRepositories);

    const category = await deleteCategory.delete(id);

    return category;
  }
}

export { DeleteCategoryService };
