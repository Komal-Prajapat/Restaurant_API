import express  from "express";
import { addEmployee } from "../controller/EmployeController.js";



export const  EmployeRouter = express.Router()

EmployeRouter.post("/addEmploye",addEmployee)