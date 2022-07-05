
import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        productPicture: String,
        name: String,
        description: String,
        price: Number,
        
    },
    {
        timestamps: true,
    }


);
    
const Product = mongoose.model("Product", productSchema);

export default Product;