import mongoose from "mongoose";
import express  from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./Server/routes/userRoutes.js";
import productRouter from "./Server/routes/productRoute.js";
import bestSellersRouter from "./Server/routes/bestSellersRoutes.js";
import messageRouter from "./Server/routes/messageRouter.js";
import cors from 'cors';

dotenv.config ("./.env");
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/product", productRouter);
app.use("/Sellers", bestSellersRouter );
app.use("/message", messageRouter);

app.use("/",(req,res)=> res.status(200).json({
  message: "This is  APi does not exist"


}));

const databaseUrl=process.env.DATABASE;
mongoose
  .connect(databaseUrl, {useNewUrlParser:true, useUnifiedTopology:true,})
  .then(() => console.log("database conected successfully"));

  const port = process.env.PORT;
app.listen( port,()=>{
    console.log(`server is running on port  ${port}`)
})

export default app;