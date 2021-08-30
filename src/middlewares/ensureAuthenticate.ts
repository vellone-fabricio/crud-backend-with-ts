import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/users/repository/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(token, "85a1bd745fe08481d12effaa5cb728f7") as IPayload;

    const usersRepository = new UsersRepository();
    const userExists = await usersRepository.findById(+userId);

    if (!userExists) {
      throw new AppError("User does not exists!", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid Token!", 401);
  }
}
