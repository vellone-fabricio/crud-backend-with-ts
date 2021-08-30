import { Router } from "express";
import { CreateUserController } from "../modules/users/useCase/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCase/deleteUser/DeleteUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

const deleteUserController = new DeleteUserController();
usersRoutes.delete("/:id", deleteUserController.handle);

export { usersRoutes };
