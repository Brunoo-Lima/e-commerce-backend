import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

interface CategoryRequest {
  id: string;
  name: string;
}

class CreateCategoryService {
  async execute({ id, name }: CategoryRequest) {
    const createCategory = getCustomRepository(CategoriesRepositories);

    if (name == '') throw new Error('Nome inválido!');

    const categoryAlreadyExists = await createCategory.findOne({
      where: {
        name: name,
      },
    });

    if (categoryAlreadyExists) throw new Error('Categoria já existe');

    const idAlreadyExists = await createCategory.findOne({
      where: {
        id: id,
      },
    });

    if (idAlreadyExists) throw new Error('Id já existe');

    const category = createCategory.create({
      id,
      name,
    });

    await createCategory.save(category);

    return { category };
  }
}

export { CreateCategoryService };
