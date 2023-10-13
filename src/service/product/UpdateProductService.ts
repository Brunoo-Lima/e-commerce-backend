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

    if (!(await updateProduct.findOne(id)))
      throw new Error('Id does not exists!');

    if (!name || !price || !category_id) throw new Error('Empty field');

    const product = await updateProduct.update(
      { id },
      { name, description, price, url, category_id }
    );

    return product;
  }
}

export { UpdateProductService };
