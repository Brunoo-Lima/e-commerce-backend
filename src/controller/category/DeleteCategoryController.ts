import { Request, Response } from 'express';

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    return res.send('Categoria excluido com Sucesso!');
  }
}

export { DeleteCategoryController };
