import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { ICompaniesDTO } from "../../dtos/ICompaniesDTO";
import { Company } from "../../entities/Company";
import { ICompaniesRepository } from "../ICompaniesRepository";

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async updateCompany(updateData: Partial<Company>, id: number): Promise<Company | undefined> {
    const companyToUpdate = await this.repository.findOne(id);

    if (!companyToUpdate) {
      return companyToUpdate;
    }

    const newCompanyInfo = {
      ...companyToUpdate,
      ...updateData,
    } as Company;

    await this.repository.save(newCompanyInfo);
    return newCompanyInfo;
  }

  async getAllCompanies(filters: Partial<ICompaniesDTO>): Promise<Company[]> {
    const allCompanies = await this.repository.find(filters);

    return allCompanies;
  }

  async selectOneCompany(id: number): Promise<Company> {
    const company = (await this.repository.findOne(id)) as Company;

    return company;
  }

  async delete(id: number): Promise<number> {
    const { affected } = await this.repository.delete(id);
    if (affected) {
      return affected;
    }

    return 0;
  }

  async create(data: ICompaniesDTO): Promise<void> {
    const { name, area, creation_date, description, director } = data;
    const company = this.repository.create({
      name,
      area,
      creation_date,
      description,
      director,
    });

    try {
      await this.repository.save(company);
    } catch (err) {
      if (err && err.code === process.env.PG_UNIQUE_CONSTRAINT_VIOLATION) {
        throw new AppError("Company's name already exists!");
      } else {
        throw new AppError("Unhandled error in creation", 500);
      }
    }
  }
}

export { CompaniesRepository };
