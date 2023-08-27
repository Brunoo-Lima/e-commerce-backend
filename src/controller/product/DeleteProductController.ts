import { Request, Response } from 'express';

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    return res.send('Produto excluido com Sucesso!');
  }
}

export { DeleteProductController };
