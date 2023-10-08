import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';
import { hash } from 'bcryptjs';

interface UserRequest {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  password: string;
}

class UpdateUserService {
  async execute({ id, name, email, admin, password }: UserRequest) {
    const updateUser = getCustomRepository(UsersRepositories);

    if (!name || !email || !admin || !password) throw new Error('Campo vazio');

    const userExists = await updateUser.findOne({
      where: {
        id: id,
      },
    });

    if (!userExists) throw new Error('Usuário não existe');

    const passwordHash = await hash(password, 8);

    const update = await updateUser.update(
      { id },
      { name, email, admin, password: passwordHash },
    );

    return update;
  }
}

export { UpdateUserService };
