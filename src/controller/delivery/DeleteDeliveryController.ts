import { Request, Response } from 'express';
import { DeleteDeliveryService } from '../../service/delivery/DeleteDeliveryService';

class DeleteDeliveryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteDelivery = new DeleteDeliveryService();

    await deleteDelivery.execute(id);

    return res.send('Delivery deleted with success!');
  }
}

export { DeleteDeliveryController };
