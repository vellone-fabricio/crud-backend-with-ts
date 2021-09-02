import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repository/IUsersRepository";

type IRequest = Partial<IUsersDTO>;
interface IRequestUser {
  id: string;
  isAdmin: boolean;
}
@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(updateData: IRequest, id: number, requestUser: IRequestUser): Promise<User> {
    // TODO - tratar password hash aqui se no payload
    const user = await this.usersRepository.update(updateData, id);

    // Todo - colocar os gestores e diretores
    if (!requestUser.isAdmin && !(id === +requestUser.id)) {
      throw new AppError("You don't have permission");
    }

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }
}

export { UpdateUserUseCase };
