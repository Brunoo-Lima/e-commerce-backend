import { Request, Response } from 'express';
import { UpdateSaleService } from '../../service/sale/UpdateSaleService';

class UpdateSaleController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { total, description, observation, products, user_id } = req.body;

    const updateSaleService = new UpdateSaleService();

    const sales = await updateSaleService.execute({
      id,
      total,
      description,
      observation,
      products,
      user_id,
    });

    return res.json(sales);
  }
}

export { UpdateSaleController };
