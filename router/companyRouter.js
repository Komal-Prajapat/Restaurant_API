import express  from "express";
import { add } from "../controller/companyController.js";

export const  companyRouter = express.Router()

companyRouter.post("/add",add)