import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

class ListProductService {
  async execute() {
    const listProduct = getCustomRepository(ProductsRepositories);

    const product = await listProduct.find();

    return product;
  }
}

export { ListProductService };
