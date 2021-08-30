import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ birth_date, city, education, email, full_name, password, state }: IUsersDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      birth_date,
      city,
      education,
      email,
      full_name,
      password: passwordHash,
      state,
    });
  }
}

export { CreateUserUseCase };
