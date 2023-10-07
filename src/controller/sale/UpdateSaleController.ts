import { Request, Response } from 'express';

class UpdateSaleController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { product_id, user_id, total, description, observation } = req.body;

    const sales = {
      product_id,
      user_id,
      total,
      description,
      observation,
    };

    return res.json(sales);
  }
}

export { UpdateSaleController };
