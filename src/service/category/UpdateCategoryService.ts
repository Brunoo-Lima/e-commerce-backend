import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

interface CategoryRequest {
  id: string;
  name: string;
}

class UpdateCategoryService {
  async execute({ id, name }: CategoryRequest) {
    if (name === '') throw new Error('Nome inválido!');

    const updateCategory = getCustomRepository(CategoriesRepositories);

    const updateCategoryExists = await updateCategory.findOne({
      where: {
        id: id,
      },
    });

    if (!updateCategoryExists) throw new Error('ID não existe');

    const category = await updateCategory.update({ id }, { name });

    return category;
  }
}

export { UpdateCategoryService };
