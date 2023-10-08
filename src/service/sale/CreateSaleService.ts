import { getCustomRepository } from 'typeorm';
import { Product } from '../../entities/Product';
import { User } from '../../entities/User';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface SaleRequest {
  total: number;
  description?: string;
  observation?: string;
  products: Product[];
  user: User;
}

class CreateSaleService {
  async execute({
    total,
    description,
    observation,
    products,
    user,
  }: SaleRequest) {
    const createSale = getCustomRepository(SalesRepositories);

    const sale = createSale.create({
      total,
      description,
      observation,
      products,
      user,
    });

    await createSale.save(sale);

    return sale;
  }
}

export { CreateSaleService };
