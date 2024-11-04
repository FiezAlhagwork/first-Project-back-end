const express = require("express")
const router = express.Router();
const {getProducts , getProduct , createProduct , updateProduct , deleteProduct} = require('../controllers/Product.controller.js')



//get all product
router.get("/" , getProducts )
// get product by id 
router.get("/:id" , getProduct )
//create new product
router.post("/" ,createProduct)
//update product
router.put("/:id", updateProduct)
//delete product
router.delete("/:id" , deleteProduct)



module.exports = router