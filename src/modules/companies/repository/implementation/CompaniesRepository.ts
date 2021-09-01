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
