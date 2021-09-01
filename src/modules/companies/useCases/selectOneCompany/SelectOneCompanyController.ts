import { Request, Response } from "express";
import { container } from "tsyringe";
import { SelectOneCompanyUseCase } from "./SelectOneCompanyUseCase";

class SelectOneCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const selectOneCompanyUseCase = container.resolve(SelectOneCompanyUseCase);

    const requestCompany = await selectOneCompanyUseCase.execute(+id);

    return response.status(200).json(requestCompany);
  }
}

export { SelectOneCompanyController };
