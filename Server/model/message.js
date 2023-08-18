import mongoose from "mongoose";


const messageSchema = new mongoose.Schema(

    {
        name: String,
        email: String,
        telephone: Number,
         message: String,

    },
    {
        timestamps: true,
    }



);

const Message = mongoose.model("Message", messageSchema);

export default Message;
