import { getRepository, Repository } from "typeorm";
import { ICollaboratorDTO } from "../../dtos/ICollaboratorDTO";
import { Collaborator } from "../../entities/Collaborator";
import { ICollaboratorRepository } from "../ICollaboratorRepository";

class CollaboratorRepository implements ICollaboratorRepository {
  private repository: Repository<Collaborator>;

  constructor() {
    this.repository = getRepository(Collaborator);
  }

  async create({ user_id, company_id, job_position_id }: ICollaboratorDTO): Promise<void> {
    const newCollaborator = this.repository.create({
      user_id,
      company_id,
      job_position_id,
    });

    await this.repository.save(newCollaborator);
  }

  async delete({ user_id, company_id, job_position_id }: ICollaboratorDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async listAll(companyId: number): Promise<Collaborator[]> {
    throw new Error("Method not implemented.");
  }
}

export { CollaboratorRepository };
