import { Request, Response } from 'express';
import { CreateProductService } from '../../service/product/CreateProductService';

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, url, category } = req.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      description,
      price,
      url,
      category,
    });

    return res.json(product);
  }
}

export { CreateProductController };
