let express = require("express");
let router = express.Router();
let raiseTicketController = require("../controller/raiseTicket.controller");

//routes.post('/sendRequest',employeeController.sendProductRequest)
router.post("/sendTicketDetails", raiseTicketController.sendProductRequest);

module.exports = router;   