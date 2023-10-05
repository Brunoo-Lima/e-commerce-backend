import { Request, Response } from 'express';
import { DeleteUserService } from '../../service/user/DeleteUserService';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteUserService = new DeleteUserService();

    const deleteUser = await deleteUserService.execute({ id });

    return res.json(deleteUser);
  }
}

export { DeleteUserController };
