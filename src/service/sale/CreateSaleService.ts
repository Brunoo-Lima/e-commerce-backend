import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';
import { Product } from '../../entities/Product';

interface SaleRequest {
  total: number;
  description?: string;
  observation?: string;
  products: Product[];
  user_id: string;
}

class CreateSaleService {
  async execute({
    total,
    description,
    observation,
    products,
    user_id,
  }: SaleRequest) {
    const createSale = getCustomRepository(SalesRepositories);

    if (!total || !products || !user_id) throw new Error('Empty field');

    const sale = createSale.create({
      total,
      description,
      observation,
      products,
      user_id,
    });

    await createSale.save(sale);

    return sale;
  }
}

export { CreateSaleService };
