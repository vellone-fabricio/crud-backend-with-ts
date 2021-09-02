import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    isAdmin: boolean;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, `${process.env.JWT_HASH_WORD}`, {
      subject: user.id.toString(),
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.full_name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token,
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
