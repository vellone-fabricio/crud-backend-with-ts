import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

const PG_UNIQUE_CONSTRAINT_VIOLATION = "23505";
class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async create({ birth_date, city, education, email, full_name, password, state }: IUsersDTO): Promise<void> {
    const user = this.repository.create({
      birth_date,
      city,
      education,
      email,
      full_name,
      password,
      state,
    });

    try {
      await this.repository.save(user);
    } catch (err) {
      if (err && err.code === PG_UNIQUE_CONSTRAINT_VIOLATION) {
        throw new AppError("Email already exists!");
      } else {
        throw new AppError("Unhandled error in creation", 500);
      }
    }
  }
}

export { UsersRepository };
