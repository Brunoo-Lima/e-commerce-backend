import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

interface ProductRequest {
  id: string;
}

class DeleteProductService {
  async execute({ id }: ProductRequest) {
    const deleteProduct = getCustomRepository(ProductsRepositories);

    const product = await deleteProduct.delete(id);

    return product;
  }
}

export { DeleteProductService };
