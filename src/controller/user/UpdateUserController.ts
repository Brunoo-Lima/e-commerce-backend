import { Request, Response } from 'express';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name, email, admin, password } = req.body;

    const user = {
      id,
      name,
      email,
      admin,
      password,
    };

    return res.json(user);
  }
}

export { UpdateUserController };
