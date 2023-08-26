import { Request, Response } from 'express';

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    return res.send('Produto excluido com Sucesso!');
  }
}

export { DeleteProductController };
