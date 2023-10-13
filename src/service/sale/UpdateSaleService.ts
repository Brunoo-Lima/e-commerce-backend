import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface SaleRequest {
  id: string;
  total: number;
  description?: string;
  observation?: string;
  user_id: string;
}

class UpdateSaleService {
  async execute({ id, total, description, observation, user_id }: SaleRequest) {
    const updateSale = getCustomRepository(SalesRepositories);

    if (!(await updateSale.findOne(id))) throw new Error('Id does not exists!');

    if (!total || !user_id) throw new Error('Empty field');

    const sale = await updateSale.update(
      { id },
      { total, description, observation, user_id }
    );

    return sale;
  }
}

export { UpdateSaleService };
