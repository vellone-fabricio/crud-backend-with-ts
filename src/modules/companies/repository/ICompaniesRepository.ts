import { ICompaniesDTO } from "../dtos/ICompaniesDTO";
import { Companies } from "../entities/Companies";

export interface ICompaniesRepository {
  create(data: ICompaniesDTO): Promise<void>;
  delete(id: number): Promise<number>;
  selectOneCompany(id: number): Promise<Companies>;
  getAllCompanies(filters: Partial<ICompaniesDTO>): Promise<Companies[]>;
  updateCompany(updateData: Partial<Companies>, id: number): Promise<Companies | undefined>;
}
