import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';
import { Category } from '../../entities/Category';

interface ProductRequest {
  id: string;
  name: string;
  description: string;
  price: number;
  url: string;
  category: Category;
}

class UpdateProductService {
  async execute({
    id,
    name,
    description,
    price,
    url,
    category,
  }: ProductRequest) {
    const updateProduct = getCustomRepository(ProductsRepositories);

    const product = await updateProduct.update(
      { id },
      { name, description, price, url, category },
    );

    return product;
  }
}

export { UpdateProductService };
