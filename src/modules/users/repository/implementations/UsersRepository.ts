import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  private removePasswordFromPayload(userData: Users): Users {
    const userWithoutPassword = {
      id: userData.id,
      full_name: userData.full_name,
      email: userData.email,
      birth_date: userData.birth_date,
      city: userData.city,
      state: userData.state,
      education: userData.education,
      isAdmin: userData.isAdmin,
      created_at: userData.created_at,
    } as Users;

    return userWithoutPassword;
  }

  async update(updateData: Partial<IUsersDTO>, id: number): Promise<Users | undefined> {
    const user = await this.repository.findOne(id);

    if (!user) {
      return user;
    }

    const newUser = {
      ...user,
      ...updateData,
    } as Users;

    await this.repository.save(newUser);
    return this.removePasswordFromPayload(newUser);
  }

  async list(filters: Partial<IUsersDTO>): Promise<Users[]> {
    const allFilteredUsers = await this.repository.find(filters);

    return allFilteredUsers;
  }

  async delete(id: number): Promise<number> {
    const { affected } = await this.repository.delete(id);
    if (affected) {
      return affected;
    }

    return 0;
  }

  async findById(id: number): Promise<Users> {
    const user = (await this.repository.findOne(id)) as Users;

    return this.removePasswordFromPayload(user);
  }

  async findByEmail(email: string): Promise<Users> {
    const user = (await this.repository.findOne({ email })) as Users;

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
      if (err && err.code === process.env.PG_UNIQUE_CONSTRAINT_VIOLATION) {
        throw new AppError("Email already exists!");
      } else {
        throw new AppError("Unhandled error in creation", 500);
      }
    }
  }
}

export { UsersRepository };
