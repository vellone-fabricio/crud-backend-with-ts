import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";
import router from "./routes";
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
app.use((err: Error, request: Request, response: Response, next: NextFunction): Response => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "500",
    message: `Internal server error - ${err.message}`,
  });
});

export default app;
