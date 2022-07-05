import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./Server/routes/userRoutes"
import productRouter from "./Server/routes/productRoute"

dotenv.config ("./.env");
const app = express();

app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/product", productRouter)
app.use("/",(req,res)=> res.status(200).json({
  message: "This is  APi does not exist"


}));

const databaseUrl=process.env.DATABASE;
mongoose
  .connect(databaseUrl, {useNewUrlParser:true, useUnifiedTopology:true,})
  .then(() => console.log("database conected successfully"));

app.listen( 7000,()=>{
    console.log('server is running on port 7000')
})

export default app;