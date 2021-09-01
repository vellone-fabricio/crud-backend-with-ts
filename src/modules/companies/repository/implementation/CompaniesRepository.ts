import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { ICompaniesDTO } from "../../dtos/ICompaniesDTO";
import { Companies } from "../../entities/Companies";
import { ICompaniesRepository } from "../ICompaniesRepository";

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Companies>;

  constructor() {
    this.repository = getRepository(Companies);
  }

  async updateCompany(updateData: Partial<Companies>, id: number): Promise<Companies | undefined> {
    const companyToUpdate = await this.repository.findOne(id);

    if (!companyToUpdate) {
      return companyToUpdate;
    }

    const newCompanyInfo = {
      ...companyToUpdate,
      ...updateData,
    } as Companies;

    await this.repository.save(newCompanyInfo);
    return newCompanyInfo;
  }

  async getAllCompanies(filters: Partial<ICompaniesDTO>): Promise<Companies[]> {
    const allCompanies = await this.repository.find(filters);

    return allCompanies;
  }

  async selectOneCompany(id: number): Promise<Companies> {
    const company = (await this.repository.findOne(id)) as Companies;

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
