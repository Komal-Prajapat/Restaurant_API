import express  from "express";
import { addSalesDetail } from "../controller/salesDetailSchemaContoller.js";

export const  salesRouter = express.Router()

salesRouter.post("/addsales",addSalesDetail)