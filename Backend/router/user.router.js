let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

router.post("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);
router.put("/updateDetails", userController.updateUser);
router.get("/retriveUserId/:userId",userController.retriveUserId);
module.exports = router;   