import { Request, Response } from 'express';
import { DeleteSaleService } from '../../service/sale/DeleteSaleService';

class DeleteSaleController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const deleteSale = new DeleteSaleService();

    await deleteSale.execute(id);

    return res.send('Sale deleted with success!');
  }
}

export { DeleteSaleController };
