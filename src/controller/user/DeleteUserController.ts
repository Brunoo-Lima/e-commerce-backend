import { Request, Response } from 'express';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    return res.send('Registro excluido com Sucesso!');
  }
}

export { DeleteUserController };