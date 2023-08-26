import { Request, Response } from 'express';

class ListSalesController {
  async handle(req: Request, res: Response) {
    const sales = [
      {
        id: '1',
        product_id: '1',
        user_id: '1',
        total: 12,
        description: 'Comidas',
        observation: '',
      },
    ];

    return res.json(sales);
  }
}

export { ListSalesController };
