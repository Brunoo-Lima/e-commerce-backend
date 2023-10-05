import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';

class ListUserService {
  async execute() {
    const user = getCustomRepository(UsersRepositories);

    const users = await user.find();

    return users;
  }
}

export { ListUserService };
