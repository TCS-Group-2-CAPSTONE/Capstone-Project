let express = require("express");
let router = express.Router();
let addCartController = require("../controller/cart.controller");

router.post("/addCartDetails", addCartController.addCartDetails );
router.get("/retriveProduct",addCartController.retriveProduct);

// router.post("/signUp", userController.signUp);
// router.put("/updateDetails", userController.updateUser);
// router.get("/retriveUserId/:userId",userController.retriveUserId);
module.exports = router;       