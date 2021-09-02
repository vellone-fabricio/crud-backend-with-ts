import { JobPosition } from "../entities/Collaborator";

export interface ICollaboratorDTO {
  user_id: number;
  company_id: number;
  job_position: JobPosition;
}
