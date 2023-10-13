import { Request, Response } from 'express';
import { UpdateProductService } from '../../service/product/UpdateProductService';

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name, description, price, url, category_id } = req.body;

    const updateProductService = new UpdateProductService();

    await updateProductService.execute({
      id,
      name,
      description,
      price,
      url,
      category_id,
    });

    return res.send('Product updated with success!');
  }
}

export { UpdateProductController };
