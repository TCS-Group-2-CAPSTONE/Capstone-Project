let express = require("express");
let router = express.Router();
let productController = require("../controller/product.controller");

router.post("/addProduct", productController.addProduct);
router.delete("/deleteProduct/:productName", productController.deleteProduct);
router.put("/updateProduct", productController.updateProduct)
router.get("/retriveProduct",productController.retriveProduct);
module.exports = router;