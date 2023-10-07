import { Request, Response } from 'express';
import { CreateCategoryService } from '../../service/category/CreateCategoryService';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { id, name } = req.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({
      id,
      name,
    });

    return res.json(category);
  }
}

export { CreateCategoryController };
