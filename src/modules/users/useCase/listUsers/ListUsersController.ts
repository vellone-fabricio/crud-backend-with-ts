import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const filters = request.query;
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const allUsers = await listUsersUseCase.execute(filters);
    return response.status(200).json(allUsers);
  }
}

export { ListUsersController };
