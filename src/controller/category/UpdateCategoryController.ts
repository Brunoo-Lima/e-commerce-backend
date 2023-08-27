import { Request, Response } from 'express';

class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name } = req.body;

    const category = {
      name,
    };

    return res.json(category);
  }
}

export { UpdateCategoryController };
