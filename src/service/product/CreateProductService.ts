import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';
import { Category } from '../../entities/Category';

interface ProductRequest {
  name: string;
  description: string;
  price: number;
  url: string;
  category: Category;
}

class CreateProductService {
  async execute({ name, description, price, url, category }: ProductRequest) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const product = productsRepositories.create({
      name,
      description,
      price,
      url,
      category,
    });

    await productsRepositories.save(product);

    return product;
  }
}

export { CreateProductService };
