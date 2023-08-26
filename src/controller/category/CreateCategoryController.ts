import { Request, Response } from 'express';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { id, name } = req.body;

    const category = {
      id,
      name,
    };

    return res.json(category);
  }
}

export { CreateCategoryController };
