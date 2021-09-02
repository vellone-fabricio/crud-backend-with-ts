import { ICollaboratorDTO } from "../dtos/ICollaboratorDTO";
import { Collaborator } from "../entities/Collaborator";

export interface ICollaboratorRepository {
  create({ user_id, company_id, job_position }: ICollaboratorDTO): Promise<void>;
  delete({ user_id, company_id, job_position }: ICollaboratorDTO): Promise<void>;
  listAll(companyId: number): Promise<Collaborator[]>;
}
