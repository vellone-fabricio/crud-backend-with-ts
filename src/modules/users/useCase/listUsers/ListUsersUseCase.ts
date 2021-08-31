import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../../repository/IUsersRepository";

const POSSIBLE_FILTERS = ["full_name", "email", "birth_date", "state", "city", "education"];
@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(filters: Partial<IUsersDTO>): Promise<Users[]> {
    let hasWrongFilter = false;

    Object.keys(filters).forEach(field => {
      if (!POSSIBLE_FILTERS.includes(field)) {
        hasWrongFilter = true;
      }
    });
    if (hasWrongFilter) {
      throw new AppError("Wrong filter!");
    }
    const allUsers = await this.usersRepository.list(filters);

    return allUsers;
  }
}

export { ListUsersUseCase };
