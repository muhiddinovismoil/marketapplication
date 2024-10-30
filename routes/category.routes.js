import { Router } from "express";
import {
    createCategoryController,
    getCategoryByIdController,
    updateCategoryByIdController,
    deleteCategoryByIdController,
    searchCategoryContorller,
} from "../controllers/index.js";

export const categoryRoutes = new Router();

categoryRoutes.get("/search", searchCategoryContorller);
categoryRoutes.post("/", createCategoryController);
categoryRoutes.get("/:id", getCategoryByIdController);
categoryRoutes.put("/:id", updateCategoryByIdController);
categoryRoutes.delete("/:id", deleteCategoryByIdController);
