const employee = require("../model/employee.model");
const requestModel = require("../model/request.model");

let signIn = async (req, response) => {
  console.log(req.body);
  let email_address = req.body.email;
    let pass = req.body.password;
  
  let userInfo = await employee.findOne({ email_address: email_address, e_password: pass });

  if (userInfo != null) {
      console.log(`user ${email_address} has logged in`);
      response.send("found")
  }
  else {
      console.log(`user ${email_address} did not log in due to wrong username/password`);
      response.send("not found");
  }
}

let getEmployeeByEmail = (req,res) => {
  let employeeEmail = req.params.email
  console.log(employeeEmail);
}

let updateEmployee = async (request, response) => {
  let employeeEmail = request.params.email
  let employee1 = request.body;
  let userInfo = await employee.findOneAndUpdate({email_address:employeeEmail},{e_password:employee1.newPass})
  if (userInfo != null) {
    
    response.send("found")
}
else {
    
    response.send("not found");
}
}

let sendProductRequest = async (request, response) => {
  
  let requestProduct = {
     name: request.body.name,
     employeeEmail: request.body.employeeEmail,
     resolved: "false",
     action: request.body.action
  }
  
  console.log(requestProduct)
  let promoCode = new requestModel(requestProduct);
  let requestInfo = await promoCode.save();
  if (requestInfo != null) {
    
    response.send("found")
}
else {
    
    response.send("not found");
}

}

module.exports = {
  
  signIn,
  getEmployeeByEmail,
  updateEmployee,
  sendProductRequest,

};
