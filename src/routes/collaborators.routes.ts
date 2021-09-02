import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { CreateCollaboratorController } from "../modules/collaborators/useCase/createCollaborator/CreateCollaboratorController";
import { DeleteCollaboratorController } from "../modules/collaborators/useCase/deleteCollaborator/DeleteCollaboratorController";
import { ListAllCollaborator } from "../modules/collaborators/useCase/listAllCollaborators/ListAllCollaboratorsController";

const collaboratorsRoutes = Router();

collaboratorsRoutes.use(ensureAuthenticated);
const createCollaboratorController = new CreateCollaboratorController();
collaboratorsRoutes.post("/", createCollaboratorController.handle);

const deleteCollaboratorController = new DeleteCollaboratorController();
collaboratorsRoutes.delete("/", deleteCollaboratorController.handle);

const listAllCollaborator = new ListAllCollaborator();
collaboratorsRoutes.get("/", listAllCollaborator.handle);

export { collaboratorsRoutes };
