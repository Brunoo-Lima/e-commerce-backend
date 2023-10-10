import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

interface ProductRequest {
  id: string;
  name: string;
  description: string;
  price: number;
  url: string;
  category_id: string;
}

class UpdateProductService {
  async execute({
    id,
    name,
    description,
    price,
    url,
    category_id,
  }: ProductRequest) {
    const updateProduct = getCustomRepository(ProductsRepositories);

    const product = await updateProduct.update(
      { id },
      { name, description, price, url, category_id },
    );

    return product;
  }
}

export { UpdateProductService };
