import { Router } from "express";
import { createCategoryController } from "../controllers/index.js";


export const categoryRoutes = new Router();

categoryRoutes.post("/", createCategoryController);