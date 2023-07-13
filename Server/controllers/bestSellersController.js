import bestSellersInfo from "../model/sellers.js";


class bestSellersController {

    static async registerProduct(req, res){
    
        const bestSellersProduct = await bestSellersInfo.create(req.body)
        if (!bestSellersProduct) {
            return res.status(404).json({ error: "product not registered" })
        }
        return res.status(200).json({ message: "product registered successfully", data: bestSellersProduct });
    }

    static async getAllproducts(req,res){
        const bestSellersProducts= await bestSellersInfo.find();
           if (!bestSellersProducts) {
               return res.status(404).json({ error: "Unfortunately, products are not retrived" })
           }
           return res.status(200).json({ message: "products retrived successfully", data: bestSellersProducts });
       }

       static async getOneProduct(req, res){
        const bestSellersProduct = await bestSellersInfo.findById(req.params.id);
        if (!bestSellersProduct) {
            return res.status(404).json({ error: "product not found" });
        }
    
        return res.status(200).json({message:"product found", data:bestSellersProduct});
    
    }

    static async deleteOneProduct(req, res){
        const bestSellersProduct = await bestSellersInfo.findByIdAndDelete(req.params.id);
        if (!bestSellersProduct) {
            return res.status(404).json({ error: "product not found" });
        }
    
        return res.status(200).json({message:"product deleted",data:bestSellersProduct});
    
    }
    
    static async updateproduct(req,res){

        const bestSellersProduct = await bestSellersInfo.findByIdAndUpdate(req.params.id, req.body,{new:true})
        if (!bestSellersProduct) {
            return res.status(404).json({ error: "product not found" });
        }
    
        return res.status(200).json({message:"product updated successfully",data:bestSellersProduct});
    
    }
       
}

export default bestSellersController;