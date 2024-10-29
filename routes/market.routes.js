import { Router } from "express";
import {
    createMarketController,
    getMarketByIdController,
    updateMarketByIdController,
    deleteMarketByIdController,
} from "../controllers/index.js";

export const marketRoutes = new Router();

marketRoutes.post("/", createMarketController);
marketRoutes.get("/:id", getMarketByIdController);
marketRoutes.put("/:id", updateMarketByIdController);
marketRoutes.delete("/:id", deleteMarketByIdController);
