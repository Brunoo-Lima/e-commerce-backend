import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

class ListSaleService {
  async execute() {
    const listSale = getCustomRepository(SalesRepositories);

    const sale = await listSale.find({ relations: ['products'] });

    return sale;
  }
}

export { ListSaleService };
