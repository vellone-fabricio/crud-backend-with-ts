import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Companies } from "../../entities/Companies";
import { ICompaniesRepository } from "../../repository/ICompaniesRepository";

interface IRequestFilters {
  name?: string;
  area?: string;
  creation_date?: Date;
  description?: string;
  director?: string;
}
const POSSIBLE_FILTERS = ["name", "area", "creation_date", "description", "director"];

@injectable()
class ListAllCompaniesUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(filters: IRequestFilters): Promise<Companies[]> {
    let hasWrongFilter = false;

    Object.keys(filters).forEach(field => {
      if (!POSSIBLE_FILTERS.includes(field)) {
        hasWrongFilter = true;
      }
    });
    if (hasWrongFilter) {
      throw new AppError("Wrong filter!");
    }
    const allCompanies = await this.companiesRepository.getAllCompanies(filters);

    return allCompanies;
  }
}

export { ListAllCompaniesUseCase };
