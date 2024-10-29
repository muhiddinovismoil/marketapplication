import { Router } from "express";
import { createMarketController } from "../controllers/index.js";


export const marketRoutes = new Router();

marketRoutes.post("/", createMarketController);
