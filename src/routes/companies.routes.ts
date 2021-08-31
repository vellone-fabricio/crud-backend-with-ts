import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";
import { CreateCompanyController } from "../modules/companies/useCases/createCompany/CreateCompanyController";

const companiesRoutes = Router();

companiesRoutes.use(ensureAuthenticated);
const createCompanyController = new CreateCompanyController();
companiesRoutes.post("/", ensureIsAdmin, createCompanyController.handle);

export { companiesRoutes };
