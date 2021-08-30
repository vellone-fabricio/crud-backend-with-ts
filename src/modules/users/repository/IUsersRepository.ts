import { IUsersData } from "../dtos/IUsersData";

interface IUsersRepository {
  create(data: IUsersData): Promise<void>;
}

export { IUsersRepository };
