import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";

class DeleteCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    throw new AppError("Not implemented yet", 502);
  }
}

export { DeleteCollaboratorController };
