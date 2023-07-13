import mongoose from "mongoose";


const bestSellersSchema = new mongoose.Schema(
    {
        productPicture: [
            { type: String }
        ],
        read: { type: String, default: 'no' },
        like: { type: Number, default: 0 },
        name: String,
        description: String,
        price: Number,

    },
    {
        timestamps: true,
    }


);

const bestSellers= mongoose.model("bestSellers", bestSellersSchema);

export default bestSellers;