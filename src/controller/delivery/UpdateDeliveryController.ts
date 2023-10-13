import { Request, Response } from 'express';
import { UpdateDeliveryService } from '../../service/delivery/UpdateDeliveryService';

class UpdateDeliveryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { date_delivery, observation, sale_id } = req.body;

    const updateDeliveryService = new UpdateDeliveryService();

    await updateDeliveryService.execute({
      id,
      date_delivery,
      observation,
      sale_id,
    });

    return res.send('Delivery updated with success!');
  }
}

export { UpdateDeliveryController };
