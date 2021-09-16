let express = require("express");
let router = express.Router();
let adminController = require("../controller/admin.controller");

router.post("/adminLogin", adminController.signIn);
router.post("/addEmployee", adminController.addEmployee);
router.delete("/deleteEmployee/:employeeEmail", adminController.deleteEmployee);

module.exports = router;