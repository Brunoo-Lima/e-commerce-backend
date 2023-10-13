import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

class DeleteSaleService {
  async execute(id: string) {
    const deleteSale = getCustomRepository(SalesRepositories);

    if (!(await deleteSale.findOne(id)))
      throw new Error('Sale does not exists!');

    return await deleteSale.delete(id);
  }
}

export { DeleteSaleService };
