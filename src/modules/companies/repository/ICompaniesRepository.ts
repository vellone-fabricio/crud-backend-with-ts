import { ICompaniesDTO } from "../dtos/ICompaniesDTO";

export interface ICompaniesRepository {
  create(data: ICompaniesDTO): Promise<void>;
}
