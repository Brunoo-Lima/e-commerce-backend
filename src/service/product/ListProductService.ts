import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

class ListProductService {
  async execute() {
    const listProduct = getCustomRepository(ProductsRepositories);

    const product = await listProduct.find();

    if (!product) throw new Error('Lista vazia');

    return product;
  }
}

export { ListProductService };
