import { Request, Response } from 'express';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    return res.send('Registro excluido com Sucesso!');
  }
}

export { DeleteUserController };
