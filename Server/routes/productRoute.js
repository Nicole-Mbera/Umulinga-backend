import express from "express";
import productController from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/registerProduct", productController.registerProduct);
productRouter.get("/allproducts", productController.getAllproducts);
productRouter.get("/shoe/:id", productController.getOneProduct);
productRouter.delete("/shoe/:id", productController.deleteOneProduct);
productRouter.patch("/shoe/:id", productController.updateproduct);

export default productRouter;
