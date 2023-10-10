import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

interface ProductRequest {
  name: string;
  description: string;
  price: number;
  url: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    description,
    price,
    url,
    category_id,
  }: ProductRequest) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    if (!name || !description || !price || !url || !category_id)
      throw new Error('Campo vazio');

    const productAlreadyExists = await productsRepositories.findOne({
      where: {
        name: name,
      },
    });

    if (productAlreadyExists) throw new Error('Produto já existe');

    const product = productsRepositories.create({
      name,
      description,
      price,
      url,
      category_id,
    });

    await productsRepositories.save(product);

    return product;
  }
}

export { CreateProductService };
