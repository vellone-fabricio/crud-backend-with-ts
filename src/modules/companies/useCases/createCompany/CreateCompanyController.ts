import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICompaniesDTO } from "../../dtos/ICompaniesDTO";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { area, creation_date, description, director, name } = request.body as ICompaniesDTO;
    const companyCreateUseCase = container.resolve(CreateCompanyUseCase);

    await companyCreateUseCase.execute({ area, creation_date, description, director, name });
    return response.status(201).send();
  }
}

export { CreateCompanyController };
