import { Router } from "express";
import {
    createProductController,
    getProductsByIdController,
    updateProductByIdController,
    deleteProductByIdController,
} from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.post("/", createProductController);
productRoutes.get("/:id", getProductsByIdController);
productRoutes.put("/:id", updateProductByIdController);
productRoutes.delete("/:id", deleteProductByIdController);
