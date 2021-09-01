import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";
import { CreateCompanyController } from "../modules/companies/useCases/createCompany/CreateCompanyController";
import { DeleteCompanyController } from "../modules/companies/useCases/deleteCompany/DeleteCompanyController";
import { SelectOneCompanyController } from "../modules/companies/useCases/selectOneCompany/SelectOneCompanyController";

const companiesRoutes = Router();

companiesRoutes.use(ensureAuthenticated);
const createCompanyController = new CreateCompanyController();
companiesRoutes.post("/", ensureIsAdmin, createCompanyController.handle);

const deleteCompanyUseCase = new DeleteCompanyController();
companiesRoutes.delete("/:id", ensureIsAdmin, deleteCompanyUseCase.handle);

const selectOneCompany = new SelectOneCompanyController();
companiesRoutes.get("/:id", ensureIsAdmin, selectOneCompany.handle);

export { companiesRoutes };
