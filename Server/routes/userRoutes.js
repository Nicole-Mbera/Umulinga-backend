import express from "express";
import UserController from "../controllers/userController.js";
import Validator from "../middlewares/validator.js";
import DataChecker from "../middlewares/dataChecker.js"

const userRouter = express.Router();

userRouter.post("/signUp", Validator.newAccountRules(),Validator.validateInput,DataChecker.isEmailExist,UserController.SignupUser);
userRouter.post("/login", UserController.userLogin);

export default userRouter;

