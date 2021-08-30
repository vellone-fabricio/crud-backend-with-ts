import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { birth_date, city, education, email, full_name, password, state } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ birth_date, city, education, email, full_name, password, state });
    return response.status(201).send();
  }
}

export { CreateUsersController };
