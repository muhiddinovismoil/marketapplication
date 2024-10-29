import {Router} from "express";
import { dropController, setUpController } from "../controllers/index.js";

export const setUpRoutes = new Router()


setUpRoutes.get("/",  setUpController)
setUpRoutes.delete("/",  dropController)
// authRoutes.post("/login", )
