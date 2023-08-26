import { Request, Response } from 'express';

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;
    const { name, email, admin, password } = req.body;

    const product = {
      name,
      email,
      admin,
      password,
    };

    return res.json(product);
  }
}

export { UpdateProductController };
