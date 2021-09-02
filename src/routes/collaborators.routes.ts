import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { CreateCollaboratorController } from "../modules/collaborators/useCase/createCollaborator/CreateCollaboratorController";

const collaboratorsRoutes = Router();

collaboratorsRoutes.use(ensureAuthenticated);
const createCollaboratorController = new CreateCollaboratorController();
collaboratorsRoutes.post("/", createCollaboratorController.handle);

export { collaboratorsRoutes };
