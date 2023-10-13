import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

class ListProductService {
  async execute() {
    const listProduct = getCustomRepository(ProductsRepositories);

    const product = await listProduct.find({
      select: ['id', 'name', 'price', 'description', 'url'],
      relations: ['category'],
    });

    if (product.length == 0) return 'Empty list';

    const productMap = product.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      url: product.url,
      category: product.category.name,
    }));

    return productMap;
  }
}

export { ListProductService };
