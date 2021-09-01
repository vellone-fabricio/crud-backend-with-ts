import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { updatedCompanyId } = request.params;
    const dataToUpdate = request.body;
    const updateCompanyController = container.resolve(UpdateCompanyUseCase);

    const companyUpdated = await updateCompanyController.execute(dataToUpdate, +updatedCompanyId);
    return response.status(200).json(companyUpdated);
  }
}

export { UpdateCompanyController };
