import { IUsersDTO } from "../dtos/IUsersDTO";

interface IUsersRepository {
  create(data: IUsersDTO): Promise<void>;
}

export { IUsersRepository };
