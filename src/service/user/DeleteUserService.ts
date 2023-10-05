import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface UserRequest {
  id: string;
}

class DeleteUserService {
  async execute({ id }: UserRequest) {
    const deleteUser = getCustomRepository(UsersRepositories);

    const deleteUsers = await deleteUser.delete(id);

    return deleteUsers;
  }
}

export { DeleteUserService };
