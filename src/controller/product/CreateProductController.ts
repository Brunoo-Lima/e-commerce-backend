import { Request, Response } from 'express';

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { id, name, description, price, url, categoryId } = req.body;

    const product = {
      id,
      name,
      description,
      price,
      url,
      categoryId,
    };

    return res.json(product);
  }
}

export { CreateProductController };
