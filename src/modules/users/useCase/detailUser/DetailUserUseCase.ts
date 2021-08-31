import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class DetailUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(usersId: number, searchedId: number, isAdmin: boolean): Promise<Users> {
    const user = await this.usersRepository.findById(searchedId);
    console.log(user);
    if (!isAdmin && !(user.id === usersId)) {
      throw new AppError("You don't have permission", 403);
    }

    if (!user) {
      throw new AppError("User does not exists");
    }

    return user;
  }
}

export { DetailUserUseCase };
