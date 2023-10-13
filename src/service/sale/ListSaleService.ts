import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

class ListSaleService {
  async execute() {
    const listSale = getCustomRepository(SalesRepositories);

    const sale = await listSale.find({
      order: { id: 'DESC' },
      relations: ['products'],
    });

    if (sale.length == 0) return 'Empty list';

    return sale;
  }
}

export { ListSaleService };
