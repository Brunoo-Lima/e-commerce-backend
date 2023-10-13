import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

class DeleteDeliveryService {
  async execute(id: string) {
    const deleteDelivery = getCustomRepository(DeliveriesRepositories);

    if (!(await deleteDelivery.findOne(id)))
      throw new Error('Delivery does not exists!');

    return await deleteDelivery.delete(id);
  }
}

export { DeleteDeliveryService };
