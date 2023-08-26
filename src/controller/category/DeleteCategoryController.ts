import { Request, Response } from 'express';

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    return res.send('Categoria excluido com Sucesso!');
  }
}

export { DeleteCategoryController };
