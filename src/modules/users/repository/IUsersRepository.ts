import { IUsersDTO } from "../dtos/IUsersDTO";
import { User } from "../entities/User";

type TypePartialUsers = Partial<IUsersDTO>;
interface IUsersRepository {
  create(data: IUsersDTO): Promise<void>;
  update(updateData: TypePartialUsers, id: number): Promise<User | undefined>;
  delete(id: number): Promise<number>;
  list(filters: TypePartialUsers): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
}

export { IUsersRepository };
