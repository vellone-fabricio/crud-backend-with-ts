import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { collaboratorsRoutes } from "./collaborators.routes";
import { companiesRoutes } from "./companies.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/companies", companiesRoutes);
router.use("/collaborators", collaboratorsRoutes);
router.use(authenticateRoutes);

export default router;
