import Message from "../model/message.js";
import messageInfo from "../model/message.js";


class messageController {

    static async sendingMessage(req, res){
    
        const message = await messageInfo.create(req.body)
        if (!message) {
            return res.status(404).json({ error: "message not sent" })
        }
        return res.status(200).json({ message: "message sent successfully", data: message });
    }

    static async getAllmessages(req,res){
        const messages= await messageInfo.find();
           if (!messages) {
               return res.status(404).json({ error: "Unfortunately, messages are not retrived" })
           }
           return res.status(200).json({ message: "messages retrived successfully", data: messages });
       }

       static async getOnemessage(req, res){
        const message = await messageInfo.findById(req.params.id);
        if (!message) {
            return res.status(404).json({ error: "message not found" });
        }
    
        return res.status(200).json({message:"message found", data:message});
    
    }

    static async deleteOnemessage(req, res){
        const message = await messageInfo.findByIdAndDelete(req.params.id);
        if (!message) {
            return res.status(404).json({ error: "message not found" });
        }
    
        return res.status(200).json({message:"message deleted",data: message});
    
    }
    
    
       
}

export default messageController;