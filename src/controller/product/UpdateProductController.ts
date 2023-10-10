import { Request, Response } from 'express';
import { UpdateProductService } from '../../service/product/UpdateProductService';

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name, description, price, url, category_id } = req.body;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({
      id,
      name,
      description,
      price,
      url,
      category_id,
    });

    return res.json(product);
  }
}

export { UpdateProductController };
