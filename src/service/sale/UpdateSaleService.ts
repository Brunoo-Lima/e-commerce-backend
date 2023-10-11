import { getCustomRepository } from 'typeorm';
import { Product } from '../../entities/Product';
import { User } from '../../entities/User';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface SaleRequest {
  id: string;
  total: number;
  description?: string;
  observation?: string;
  products: Product[];
  user_id: string;
}

class UpdateSaleService {
  async execute({
    id,
    total,
    description,
    observation,
    products,
    user_id,
  }: SaleRequest) {
    const updateSale = getCustomRepository(SalesRepositories);

    const sale = await updateSale.update(
      { id },
      { total, description, observation, products, user_id }
    );
    console.log(sale);

    return sale;
  }
}

export { UpdateSaleService };
