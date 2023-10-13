import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

interface DeliveryRequest {
  id: string;
  date_delivery: Date;
  observation: string;
  sale_id: string;
}

class UpdateDeliveryService {
  async execute({ id, date_delivery, observation, sale_id }: DeliveryRequest) {
    const updateDelivery = getCustomRepository(DeliveriesRepositories);

    const delivery = updateDelivery.update(
      { id },
      {
        date_delivery,
        observation,
        sale_id,
      }
    );

    return delivery;
  }
}

export { UpdateDeliveryService };
