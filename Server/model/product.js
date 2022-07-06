
import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        productPicture: [
            {type: String}
        ],
      read:{type: String, default: 'no'},
      like:{ type: Number, default: 0 },
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