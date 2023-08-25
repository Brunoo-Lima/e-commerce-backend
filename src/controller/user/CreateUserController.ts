import { Request, Response } from 'express';
import { CreateUserService } from '../../service/user/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, admin, password } = req.body;

    const createUserService = new CreateUserService();

    const createUser = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    return res.json(createUser);
  }
}

export { CreateUserController };
