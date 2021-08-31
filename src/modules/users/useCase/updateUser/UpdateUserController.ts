import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const dataToUpload = request.body;
    const { id } = request.params;
    const requestUser = request.user;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const updatedUser = await updateUserUseCase.execute(dataToUpload, +id, requestUser);

    return response.status(201).json(updatedUser);
  }
}

export { UpdateUserController };
