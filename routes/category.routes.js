import { Router } from "express";
import {
    createCategoryController,
    getCategoryByIdController,
    updateCategoryByIdController,
    deleteCategoryByIdController,
} from "../controllers/index.js";

export const categoryRoutes = new Router();

categoryRoutes.post("/", createCategoryController);
categoryRoutes.get("/:id", getCategoryByIdController);
categoryRoutes.put("/:id", updateCategoryByIdController);
categoryRoutes.delete("/:id", deleteCategoryByIdController);
