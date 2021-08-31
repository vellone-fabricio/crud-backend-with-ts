import { IUsersDTO } from "../dtos/IUsersDTO";
import { Users } from "../entities/Users";

interface IUsersRepository {
  create(data: IUsersDTO): Promise<void>;
  delete(id: number): Promise<number>;
  list(filters: Partial<IUsersDTO>): Promise<Users[]>;
  findByEmail(email: string): Promise<Users>;
  findById(id: number): Promise<Users>;
}

export { IUsersRepository };
