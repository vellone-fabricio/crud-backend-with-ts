import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Company } from "../../entities/Company";
import { CompaniesRepository } from "../../repository/implementation/CompaniesRepository";

@injectable()
class SelectOneCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: CompaniesRepository,
  ) {}

  async execute(id: number): Promise<Company> {
    const company = await this.companiesRepository.selectOneCompany(id);
    if (!company) {
      throw new AppError("Company not found");
    }

    return company;
  }
}

export { SelectOneCompanyUseCase };
