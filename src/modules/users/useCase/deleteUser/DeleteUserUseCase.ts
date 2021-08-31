import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository,
  ) {}

  async execute(id: number): Promise<void> {
    await this.userRepository.delete(id).then(affected => {
      if (affected === 0) {
        throw new AppError("User not found!");
      }
    });
  }
}
export { DeleteUserUseCase };
