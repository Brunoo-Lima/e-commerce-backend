import { Request, Response } from 'express';
import { DeleteCategoryService } from '../../service/category/DeleteCategoryService';

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteCategoryService = new DeleteCategoryService();

    await deleteCategoryService.execute({ id });

    return res.send('Categoria excluido com Sucesso!');
  }
}

export { DeleteCategoryController };
