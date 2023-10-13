import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

class CreateCategoryService {
  async execute(name: string) {
    const createCategory = getCustomRepository(CategoriesRepositories);

    if (name == '') throw new Error('Invalid name!');

    const categoryAlreadyExists = await createCategory.findOne({
      where: {
        name: name,
      },
    });

    if (categoryAlreadyExists) throw new Error('Category already exists');

    const category = createCategory.create({
      name,
    });

    await createCategory.save(category);

    return category;
  }
}

export { CreateCategoryService };
