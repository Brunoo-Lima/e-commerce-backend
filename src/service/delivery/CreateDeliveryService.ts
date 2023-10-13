import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

interface DeliveryRequest {
  date_delivery: Date;
  observation: string;
  sale_id: string;
}

class CreateDeliveryService {
  async execute({ date_delivery, observation, sale_id }: DeliveryRequest) {
    const createDelivery = getCustomRepository(DeliveriesRepositories);

    const delivery = createDelivery.create({
      date_delivery,
      observation,
      sale_id,
    });

    await createDelivery.save(delivery);

    return delivery;
  }
}

export { CreateDeliveryService };
