const express = require("express");
const { insertProduct } = require("../Controllers/commerceControllers");
const routes = express.Router();




//insertProduct
routes.post('/newProduct', insertProduct);







//export
module.exports = routes;