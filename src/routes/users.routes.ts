import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "../modules/users/useCase/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCase/deleteUser/DeleteUserController";
import { ListUsersController } from "../modules/users/useCase/listUsers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

usersRoutes.use(ensureAuthenticated);
const deleteUserController = new DeleteUserController();
usersRoutes.delete("/:id", deleteUserController.handle);

const listUsersController = new ListUsersController();
usersRoutes.get("/", listUsersController.handle);

export { usersRoutes };
