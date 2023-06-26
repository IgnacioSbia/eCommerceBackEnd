const express = require("express");
const { insertProduct, getProducts, getSelectedProduct } = require("../Controllers/commerceControllers");
const routes = express.Router();




//insertProduct
routes.post('/newProduct', insertProduct);



//getProducts
routes.get('/Products', getProducts);

//getSelectedProduct
routes.get('/Product', getSelectedProduct)


//export
module.exports = routes;