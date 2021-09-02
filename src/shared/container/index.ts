import { container } from "tsyringe";
import { ICollaboratorRepository } from "../../modules/collaborators/repository/ICollaboratorRepository";
import { CollaboratorRepository } from "../../modules/collaborators/repository/implementation/CollaboratorRepository";
import { ICompaniesRepository } from "../../modules/companies/repository/ICompaniesRepository";
import { CompaniesRepository } from "../../modules/companies/repository/implementation/CompaniesRepository";
import { UsersRepository } from "../../modules/users/repository/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repository/IUsersRepository";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<ICompaniesRepository>("CompaniesRepository", CompaniesRepository);
container.registerSingleton<ICollaboratorRepository>("CollaboratorRepository", CollaboratorRepository);
