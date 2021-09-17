let express = require("express");
let router = express.Router();
let requestController = require("../controller/request.controller");

router.post("/addRequest", requestController.addRequest);
router.get("/viewRequests", requestController.viewRequests);
router.delete("/deleteRequest/:requestId", requestController.deleteRequest);

module.exports = router;