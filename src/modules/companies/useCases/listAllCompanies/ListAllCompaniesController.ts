import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCompaniesUseCase } from "./ListAllCompaniesUseCase";

class ListAllCompaniesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const filters = request.query;
    const listAllCompaniesUseCase = container.resolve(ListAllCompaniesUseCase);

    const allCompanies = await listAllCompaniesUseCase.execute(filters);
    return response.status(200).json(allCompanies);
  }
}

export { ListAllCompaniesController };
