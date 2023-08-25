interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin, password }: UserRequest) {
    if (name === '') throw new Error('Nome inválido!');

    const user = {
      name,
      email,
      admin,
      password,
    };

    return user;
  }
}

export { CreateUserService };
