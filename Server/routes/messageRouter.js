import express from "express";
import messageController from "../controllers/messageController.js"; 

const messageRouter = express.Router(); 

messageRouter.post("/SendMessage", messageController.sendingMessage);
messageRouter.get("/allMessages", messageController.getAllmessages);
messageRouter.get("/sms/:id", messageController.getOnemessage);
messageRouter.delete("/sms/:id", messageController.deleteOnemessage);


export default messageRouter;
