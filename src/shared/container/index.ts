import { container } from "tsyringe";
import { UsersRepository } from "../../modules/users/repository/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repository/IUsersRepository";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
