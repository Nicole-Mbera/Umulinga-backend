import express from "express";
import bestSellersController from "../controllers/bestSellersController.js"

const bestSellersRouter= express.Router();

bestSellersRouter.post("/registerProduct", bestSellersController.registerProduct)
bestSellersRouter.get("/allproducts", bestSellersController.getAllproducts);
bestSellersRouter.get("/shoe/:id", bestSellersController.getOneProduct);
bestSellersRouter.delete("/shoe/:id", bestSellersController.deleteOneProduct);
bestSellersRouter.patch("/shoe/:id", bestSellersController.updateproduct);

export default bestSellersRouter;