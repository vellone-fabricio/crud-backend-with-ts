import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { SharedServiceUserCollaborator } from "../../../users/sharedServices/SharedServiceUserCollaborator";
import { ICollaboratorDTO } from "../../dtos/ICollaboratorDTO";
import { ICollaboratorRepository } from "../../repository/ICollaboratorRepository";

interface IAuthenticateUser {
  id: string;
  isAdmin: boolean;
}

@injectable()
class CreateCollaboratorUseCase {
  constructor(
    @inject("CollaboratorRepository")
    private collaboratorRepository: ICollaboratorRepository,
  ) {}

  async execute(
    { company_id, job_position, user_id }: ICollaboratorDTO,
    authenticateUser: IAuthenticateUser,
  ): Promise<void> {
    const sharedServiceUserCollaborator = container.resolve(SharedServiceUserCollaborator);
    const requestedUserToCreate = await sharedServiceUserCollaborator.getById(+user_id);

    if (requestedUserToCreate.isAdmin) {
      throw new AppError("Admin users can't be collaborators!");
    }
    // TODO - verificar se é gestor, diretor da mesma empresa
    if (!authenticateUser.isAdmin) {
      throw new AppError("You don't have permission");
    }

    await this.collaboratorRepository.create({ company_id, job_position, user_id });
  }
}

export { CreateCollaboratorUseCase };
