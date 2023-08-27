import { Request, Response } from 'express';

class DeleteSalesController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    return res.send('Venda excluida com Sucesso!');
  }
}

export { DeleteSalesController };
