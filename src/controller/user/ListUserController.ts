import { Request, Response } from 'express';

class ListUserController {
  async handle(req: Request, res: Response) {
    const user = [
      {
        id: 1,
        name: 'Bruno',
        email: 'bruno@gmail.com',
      },
      {
        id: 2,
        name: 'Leo',
        email: 'leo@gmail.com',
      },
      {
        id: 3,
        name: 'Ale',
        email: 'Ale@gmail.com',
      },
    ];

    return res.json(user);
  }
}

export { ListUserController };
