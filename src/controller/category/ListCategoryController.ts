import { Request, Response } from 'express';

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const category = [
      {
        id: '1',
        name: 'Comida',
      },
      {
        id: '2',
        name: 'Bebida',
      },
    ];

    return res.json(category);
  }
}

export { ListCategoryController };
