import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { CreateCollaboratorUseCase } from "./CreateCollaboratorUseCase";

class CreateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, company_id, job_position } = request.body;
    const authenticateUser = request.user;
    const createCollaboratorUseCase = container.resolve(CreateCollaboratorUseCase);

    try {
      await createCollaboratorUseCase.execute({ user_id, company_id, job_position }, authenticateUser);
    } catch (err) {
      throw new AppError("Wrong payload - Attention on unique keys and FK constraints");
    }
    return response.status(201).json();
  }
}

export { CreateCollaboratorController };
