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
        const rslt = await knex.select('*').from("Products")
        res.status(200).json({products:rslt})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};