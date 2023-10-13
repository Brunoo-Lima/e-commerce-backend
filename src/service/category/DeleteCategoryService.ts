import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

class DeleteCategoryService {
  async execute(id: string) {
    const deleteCategory = getCustomRepository(CategoriesRepositories);

    if (!(await deleteCategory.findOne(id)))
      throw new Error('Id does not exists!');

    const category = await deleteCategory.delete(id);

    return category;
  }
}

export { DeleteCategoryService };
