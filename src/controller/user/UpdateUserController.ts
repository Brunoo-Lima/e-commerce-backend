import { Request, Response } from 'express';
import { UpdateUserService } from '../../service/user/UpdateUserService';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name, email, admin, password } = req.body;

    const updateUserService = new UpdateUserService();

    await updateUserService.execute({
      id,
      name,
      email,
      admin,
      password,
    });

    return res.send('User updated with success');
  }
}

export { UpdateUserController };
