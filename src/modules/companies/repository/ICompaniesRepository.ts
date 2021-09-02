import { ICompaniesDTO } from "../dtos/ICompaniesDTO";
import { Company } from "../entities/Company";

export interface ICompaniesRepository {
  create(data: ICompaniesDTO): Promise<void>;
  delete(id: number): Promise<number>;
  selectOneCompany(id: number): Promise<Company>;
  getAllCompanies(filters: Partial<ICompaniesDTO>): Promise<Company[]>;
  updateCompany(updateData: Partial<Company>, id: number): Promise<Company | undefined>;
}
