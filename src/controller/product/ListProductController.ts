import { Request, Response } from 'express';

class ListProductController {
  async handle(req: Request, res: Response) {
    const product = [
      {
        id: 1,
        name: 'Pizza',
        description: 'Saborosa',
        price: 38,
        url: 'pizza.png',
        category_id: '1',
      },
      {
        id: 2,
        name: 'Coca 2L',
        description: 'Refrescante',
        price: 12,
        url: 'coca.png',
        category_id: '2',
      },
      {
        id: 3,
        name: 'Guarana 2L',
        description: 'Refrescante',
        price: 12,
        url: 'guarana.png',
        category_id: '2',
      },
    ];

    return res.json(product);
  }
}

export { ListProductController };
