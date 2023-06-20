const express = require("express");
const { insertProduct, getProducts } = require("../Controllers/commerceControllers");
const routes = express.Router();




//insertProduct
routes.post('/newProduct', insertProduct);



//getProducts
routes.get('/getProducts', getProducts);



//export
module.exports = routes;