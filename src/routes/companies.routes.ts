import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";
import { CreateCompanyController } from "../modules/companies/useCases/createCompany/CreateCompanyController";
import { DeleteCompanyController } from "../modules/companies/useCases/deleteCompany/DeleteCompanyController";
import { ListAllCompaniesController } from "../modules/companies/useCases/listAllCompanies/ListAllCompaniesController";
import { SelectOneCompanyController } from "../modules/companies/useCases/selectOneCompany/SelectOneCompanyController";

const companiesRoutes = Router();
companiesRoutes.use(ensureAuthenticated);

const selectOneCompany = new SelectOneCompanyController();
companiesRoutes.get("/:id", selectOneCompany.handle);

companiesRoutes.use(ensureIsAdmin);
const deleteCompanyUseCase = new DeleteCompanyController();
companiesRoutes.delete("/:id", deleteCompanyUseCase.handle);

const createCompanyController = new CreateCompanyController();
companiesRoutes.post("/", createCompanyController.handle);

const listAllCompaniesController = new ListAllCompaniesController();
companiesRoutes.get("/", listAllCompaniesController.handle);

export { companiesRoutes };
