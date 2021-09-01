import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICompaniesRepository } from "../../repository/ICompaniesRepository";

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(idToDelete: number): Promise<void> {
    const deletedRecords = await this.companiesRepository.delete(idToDelete);

    if (deletedRecords === 0) {
      throw new AppError("Company not found");
    }
  }
}

export { DeleteCompanyUseCase };
