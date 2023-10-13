import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface UserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: UserRequest) {
    if (!email) throw new Error('Incorrect email');

    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({
      where: {
        email: email,
      },
    });

    const passwordHash = await hash(password, 8);

    const passwordMatch = await compare(password, passwordHash);

    if (!passwordMatch) throw new Error('Senha incorreta');

    const token = sign(
      {
        email: user.email,
        password: user.password,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return {
      id: user.id,
      email: user.email,
      password: user.password,
      token,
    };
  }
}

export { AuthUserService };
