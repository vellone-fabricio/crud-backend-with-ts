import { IUsersDTO } from "../dtos/IUsersDTO";
import { Users } from "../entities/Users";

type TypePartialUsers = Partial<IUsersDTO>;
interface IUsersRepository {
  create(data: IUsersDTO): Promise<void>;
  update(updateData: TypePartialUsers, id: number): Promise<Users>;
  delete(id: number): Promise<number>;
  list(filters: TypePartialUsers): Promise<Users[]>;
  findByEmail(email: string): Promise<Users>;
  findById(id: number): Promise<Users>;
}

export { IUsersRepository };
