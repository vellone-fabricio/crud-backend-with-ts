import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export async function ensureIsAdmin(request: Request, response: Response, next: NextFunction): Promise<void> {
  const { isAdmin } = request.user;

  if (!isAdmin) {
    throw new AppError("You don't have permission to perform this action", 403);
  }

  next();
}
