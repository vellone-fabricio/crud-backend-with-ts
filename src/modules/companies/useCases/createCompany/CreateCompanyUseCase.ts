import { inject, injectable } from "tsyringe";
import { ICompaniesDTO } from "../../dtos/ICompaniesDTO";
import { ICompaniesRepository } from "../../repository/ICompaniesRepository";

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(requestData: ICompaniesDTO): Promise<void> {
    await this.companiesRepository.create(requestData);
  }
}

export { CreateCompanyUseCase };
