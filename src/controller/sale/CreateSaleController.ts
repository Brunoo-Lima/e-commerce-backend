import { Request, Response } from 'express';
import { CreateSaleService } from '../../service/sale/CreateSaleService';

class CreateSaleController {
  async handle(req: Request, res: Response) {
    const { total, description, observation, products, user } = req.body;

    const saleCreateService = new CreateSaleService();

    const sales = await saleCreateService.execute({
      total,
      description,
      observation,
      products,
      user,
    });

    return res.json(sales);
  }
}

export { CreateSaleController };
