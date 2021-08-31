import { Request, Response } from "express";
import { container } from "tsyringe";
import { DetailUserUseCase } from "./DetailUserUseCase";

class DetailUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user } = request;
    const detailUserUseCase = container.resolve(DetailUserUseCase);

    const returnedUser = await detailUserUseCase.execute(+user.id, +id, user.isAdmin);

    return response.status(200).json(returnedUser);
  }
}

export { DetailUserController };
