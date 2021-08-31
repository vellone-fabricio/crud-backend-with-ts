import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";
import { CreateUserController } from "../modules/users/useCase/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCase/deleteUser/DeleteUserController";
import { DetailUserController } from "../modules/users/useCase/detailUser/DetailUserController";
import { ListUsersController } from "../modules/users/useCase/listUsers/ListUsersController";
import { UpdateUserController } from "../modules/users/useCase/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

usersRoutes.use(ensureAuthenticated);
const deleteUserController = new DeleteUserController();
usersRoutes.delete("/:id", deleteUserController.handle);

const detailUserController = new DetailUserController();
usersRoutes.get("/:id", detailUserController.handle);

const updateUserController = new UpdateUserController();
usersRoutes.post("/:id", updateUserController.handle);

const listUsersController = new ListUsersController();
usersRoutes.get("/", ensureIsAdmin, listUsersController.handle);

export { usersRoutes };
