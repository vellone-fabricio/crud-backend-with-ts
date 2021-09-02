import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { User } from "../entities/User";
import { IUsersRepository } from "../repository/IUsersRepository";

@injectable()
class SharedServiceUserCollaborator {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async getById(userId: number): Promise<User> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User not found");
    }
    return user;
  }
}

export { SharedServiceUserCollaborator };
