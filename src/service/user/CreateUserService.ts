import { hash } from 'bcryptjs';

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin, password }: UserRequest) {
    if (name === '') throw new Error('Nome inválido!');

    const passwordHash = await hash(password, 8);

    const user = {
      name,
      email,
      admin,
      password: passwordHash,
    };

    return user;
  }
}

export { CreateUserService };
