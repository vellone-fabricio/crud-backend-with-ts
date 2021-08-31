import { inject, injectable } from "tsyringe";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<Users[]> {
    const allUsers = await this.usersRepository.list();

    return allUsers;
  }
}

export { ListUsersUseCase };
