import bodyParser from "body-parser";
import express  from "express";
import mongoose from "mongoose";
import { companyRouter } from "./router/companyRouter.js";
import { CustomerRouter } from "./router/customerRouter.js";
import { EmployeRouter } from "./router/EmployeRouter.js";
// import { UserRouter } from "./router/userRouter.js";
// import { inventoryRouter } from "./router/inventoryRouter.js";
// import { salesRouter } from "./router/salesRouter.js";

const app = express()



app.use(bodyParser.json()); 

app.use("/api",companyRouter);
// app.use("/api",UserRouter);
app.use("/api",CustomerRouter);
// app.use("/api",inventoryRouter);
// app.use("/api",salesRouter);
app.use("/api",EmployeRouter)

mongoose
  .connect("mongodb+srv://komalprajapat267:1SqXaaRyOH1STqSt@komal.fjcbbzw.mongodb.net/", {
    dbName: "restaurant",
  })
  .then(() => console.log("MongoDB Connected..!"));
    
app.listen(9010 ,()=>{
    console.log("server is connected");
})