import { Request, Response } from 'express';
import { DeleteProductService } from '../../service/product/DeleteProductService';

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteProduct = new DeleteProductService();

    const product = await deleteProduct.execute({ id });

    return res.send('Produto excluido com Sucesso! ' + product.affected);
  }
}

export { DeleteProductController };
