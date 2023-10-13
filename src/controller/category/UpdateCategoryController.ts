import { Request, Response } from 'express';
import { UpdateCategoryService } from '../../service/category/UpdateCategoryService';

class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name } = req.body;

    const updateCategory = new UpdateCategoryService();

    await updateCategory.execute({
      id,
      name,
    });

    return res.send('Category updated with success');
  }
}

export { UpdateCategoryController };
