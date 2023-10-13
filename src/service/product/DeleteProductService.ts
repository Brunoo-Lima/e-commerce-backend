import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

class DeleteProductService {
  async execute(id: string) {
    const deleteProduct = getCustomRepository(ProductsRepositories);

    if (!(await deleteProduct.findOne(id)))
      throw new Error('Id does not exists!');

    const product = await deleteProduct.delete(id);

    return product;
  }
}

export { DeleteProductService };
