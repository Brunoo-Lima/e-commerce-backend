import { Request, Response } from 'express';
import { UpdateSaleService } from '../../service/sale/UpdateSaleService';

class UpdateSaleController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { total, description, observation, user_id } = req.body;

    const updateSaleService = new UpdateSaleService();

    await updateSaleService.execute({
      id,
      total,
      description,
      observation,
      user_id,
    });

    return res.send('Sales updated with success');
  }
}

export { UpdateSaleController };
