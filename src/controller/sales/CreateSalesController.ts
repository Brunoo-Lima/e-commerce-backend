import { Request, Response } from 'express';

class CreateSalesController {
  async handle(req: Request, res: Response) {
    const { id, product_id, user_id, total, description, observation } =
      req.body;

    const sales = {
      id,
      product_id,
      user_id,
      total,
      description,
      observation,
    };

    return res.json(sales);
  }
}

export { CreateSalesController };
