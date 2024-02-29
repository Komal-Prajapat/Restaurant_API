import express  from "express";
import { addCustomer } from "../controller/customerController.js";



export const  CustomerRouter = express.Router()

CustomerRouter.post("/addCustomer",addCustomer)