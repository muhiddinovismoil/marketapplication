import { Router } from "express";
import {
    createProductController,
    getProductsByIdController,
    updateProductByIdController,
    deleteProductByIdController,
    searchProductController,
} from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.post("/", createProductController);
productRoutes.get("/search", searchProductController);
productRoutes.get("/:id", getProductsByIdController);
productRoutes.put("/:id", updateProductByIdController);
productRoutes.delete("/:id", deleteProductByIdController);
