import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Companies } from "../../entities/Companies";
import { ICompaniesRepository } from "../../repository/ICompaniesRepository";

interface IRequestedData {
  name?: string;
  area?: string;
  creation_date?: Date;
  description?: string;
  director?: string;
}

@injectable()
class UpdateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(dataToUpdate: IRequestedData, idToUpdate: number): Promise<Companies> {
    const updatedCompany = (await this.companiesRepository.updateCompany(dataToUpdate, idToUpdate)) as Companies;

    if (!updatedCompany) {
      throw new AppError("Company not found");
    }

    return updatedCompany;
  }
}

export { UpdateCompanyUseCase };
