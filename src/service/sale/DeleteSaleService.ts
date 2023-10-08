import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface SaleRequest {
  id: string;
}

class DeleteSaleService {
  async execute({ id }: SaleRequest) {
    const deleteSale = getCustomRepository(SalesRepositories);

    const sale = await deleteSale.delete(id);

    return sale;
  }
}

export { DeleteSaleService };
