import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

interface CategoryRequest {
  id: string;
  name: string;
}

class UpdateCategoryService {
  async execute({ id, name }: CategoryRequest) {
    const updateCategory = getCustomRepository(CategoriesRepositories);

    if (!name) throw new Error('Empty field');

    if (!(await updateCategory.findOne(id)))
      throw new Error('Id does not exists!');

    const nameAlreadyExists = await updateCategory.findOne({
      where: {
        name: name,
      },
    });

    if (nameAlreadyExists) throw new Error('Category already exists!');

    const category = await updateCategory.update({ id }, { name });

    return category;
  }
}

export { UpdateCategoryService };
