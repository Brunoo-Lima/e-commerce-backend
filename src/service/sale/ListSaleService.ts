import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

class ListSaleService {
  async execute() {
    const listSale = getCustomRepository(SalesRepositories);

    const sale = await listSale.find();

    return sale;
  }
}

export { ListSaleService };
