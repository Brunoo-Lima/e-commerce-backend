import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

class ListDeliveryService {
  async execute() {
    const listDelivery = getCustomRepository(DeliveriesRepositories);

    const delivery = await listDelivery.find({
      select: ['id', 'date_delivery', 'observation'],
      relations: ['sales'],
    });

    if (delivery.length == 0) return 'Empty list';

    return delivery;
  }
}

export { ListDeliveryService };
