import { Request, Response } from 'express';
import { ListUserService } from '../../service/user/ListUserService';

class ListUserController {
  async handle(req: Request, res: Response) {
    const listUsers = new ListUserService();
    const user = await listUsers.execute();

    return res.json(user);
  }
}

export { ListUserController };
