import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface SaleRequest {
  total: number;
  description?: string;
  observation?: string;
  product_id: string;
  user_id: string;
}

class CreateSaleService {
  async execute({
    total,
    description,
    observation,
    product_id,
    user_id,
  }: SaleRequest) {
    const createSale = getCustomRepository(SalesRepositories);

    const sale = createSale.create({
      total,
      description,
      observation,
      product_id,
      user_id,
    });

    await createSale.save(sale);

    return sale;
  }
}

export { CreateSaleService };
