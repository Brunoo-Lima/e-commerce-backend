import { Request, Response } from 'express';
import { CreateDeliveryService } from '../../service/delivery/CreateDeliveryService';

class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { date_delivery, observation, sale_id } = req.body;

    const createDeliveryService = new CreateDeliveryService();

    const delivery = await createDeliveryService.execute({
      date_delivery,
      observation,
      sale_id,
    });

    return res.json(delivery);
  }
}

export { CreateDeliveryController };
