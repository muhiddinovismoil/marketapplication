import { Router } from "express";
import { createProductController } from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.post("/", createProductController);
