const { defaults } = require("pg");
const knex = require("../config/knexfile");

//InsertProducts
exports.insertProduct = async(req,res)=>{
    try{
        knex('Products')
            .insert({
                product_name: req.body.productName,
                product_description: req.body.productDescription,
                product_price: req.body.productPrice
            })
            .then(res.json({message: "success!"}))
    }catch(error){
        res.json({error:error.message})
    }
}

//getProducts
exports.getProducts = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
};