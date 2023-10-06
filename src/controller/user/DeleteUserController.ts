import { Request, Response } from 'express';
import { DeleteUserService } from '../../service/user/DeleteUserService';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteUserService = new DeleteUserService();

    await deleteUserService.execute({ id });

    return res.send('Usuário excluido com sucesso');
  }
}

export { DeleteUserController };
