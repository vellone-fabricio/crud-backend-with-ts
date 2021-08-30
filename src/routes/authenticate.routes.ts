import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/useCase/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };
