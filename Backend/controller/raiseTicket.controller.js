const { response } = require("express");
let raiseTicketModel = require("../model/raiseTicket.model");
// const requestModel = require("../model/request.model");




let sendProductRequest = async (request, response) => {
  
    let requestProduct = {
       userId: request.body.userId,
       email: request.body.email,
       resolved: "false",
       action: request.body.action
    }
    
    console.log(requestProduct)
    let promoCode = new raiseTicketModel(requestProduct);
    let requestInfo = await promoCode.save();
    if (requestInfo != null) {
      
      response.send("found")
  }
  else {
      
      response.send("not found");
  }
  
  }

module.exports = {sendProductRequest};