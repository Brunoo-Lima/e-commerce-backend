import { Request, Response } from 'express';
import { ListSaleService } from '../../service/sale/ListSaleService';

class ListSaleController {
  async handle(req: Request, res: Response) {
    const listService = new ListSaleService();

    const sales = await listService.execute();
    console.log(sales);

    return res.json(sales);
  }
}

export { ListSaleController };
