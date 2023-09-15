import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
interface UserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: UserRequest) {
    if (email !== 'prog@fatec.com') throw new Error('Email incorreto');

    const passwordHash = await hash('fatec', 8);

    const passwordMatch = await compare(password, passwordHash);

    if (!passwordMatch) throw new Error('Senha incorreta');

    const token = sign(
      {
        email: 'prog@fatec.com',
      },
      process.env.JWT_SECRET,
      {
        subject: 'Admin',
        expiresIn: '30d',
      }
    );

    return {
      email: 'prog@fatec.com',
      password: 'fatec',
      token,
    };
  }
}

export { AuthUserService };
