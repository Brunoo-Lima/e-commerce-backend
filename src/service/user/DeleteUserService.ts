import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';

class DeleteUserService {
  async execute(id: string) {
    const deleteUser = getCustomRepository(UsersRepositories);

    if (!(await deleteUser.findOne(id))) throw new Error('Id does not exists!');

    const deleteUsers = await deleteUser.delete(id);

    return deleteUsers;
  }
}

export { DeleteUserService };
