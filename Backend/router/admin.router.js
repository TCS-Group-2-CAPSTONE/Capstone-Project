let express = require("express");
let router = express.Router();
let adminController = require("../controller/admin.controller");

router.post("/", adminController.signIn);

module.exports = router;