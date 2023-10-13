import { Request, Response } from 'express';
import { ListDeliveryService } from '../../service/delivery/ListDeliveryService';

class ListDeliveryController {
  async handle(req: Request, res: Response) {
    const listDeliveryService = new ListDeliveryService();

    const delivery = await listDeliveryService.execute();

    return res.json(delivery);
  }
}

export { ListDeliveryController };
