import { Request, Response } from 'express';

class ListUserController {
  async handle(req: Request, res: Response) {
    const user = [
      {
        name: 'Bruno',
        email: 'bruno@gmail.com',
      },
      {
        name: 'Leo',
        email: 'leo@gmail.com',
      },
      {
        name: 'Ale',
        email: 'Ale@gmail.com',
      },
    ];

    return res.json(user);
  }
}

export { ListUserController };
