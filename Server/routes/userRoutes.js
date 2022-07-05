import express from "express";
import UserController from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/dataChecker"

const userRouter = express.Router();

userRouter.post("/signUp", Validator.newAccountRules(),Validator.validateInput,DataChecker.isEmailExist,UserController.SignupUser);
userRouter.post("/login", UserController.userLogin);

export default userRouter;

