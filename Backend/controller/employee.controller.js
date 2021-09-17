//// load the model file  ie user-defined module like a import in ts file 
const employee = require("../model/employee.model");
const requestModel = require("../model/request.model");

//function to check valid employee login details
let signIn = async (req, response) => {
  console.log(req.body);
  let email_address = req.body.email;
    let pass = req.body.password;
  
  // find the employee in the database    
  let userInfo = await employee.findOne({ email_address: email_address, e_password: pass });

  // Send confirmation if the user exist
  if (userInfo != null) {
      console.log(`user ${email_address} has logged in`);
      response.send("found")
  }
  else {
      console.log(`user ${email_address} did not log in due to wrong username/password`);
      response.send("not found");
  }
}

//function to get an employee document from table based on email
let getEmployeeByEmail = (req,res) => {
  let employeeEmail = req.params.email
  console.log(employeeEmail);
}

/// function to change the user password
let updateEmployee = async (request, response) => {
  //Take employee e-mail from the url 
  let employeeEmail = request.params.email
  //Get the password from the request body
  let employee1 = request.body;
  //update the employee password in database  
  let userInfo = await employee.findOneAndUpdate({email_address:employeeEmail},{e_password:employee1.newPass})
  //sending response to the front-end
  if (userInfo != null) {
    
    response.send("found")
}
else {
    
    response.send("not found");
}
}

//function for sending Request
let sendProductRequest = async (request, response) => {
  //take data from the request body  
  let requestProduct = {
     name: request.body.name,
     employeeEmail: request.body.employeeEmail,
     resolved: "false",
     action: request.body.action
  }
  
  //add data into the database
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

//exporting all the functions 
module.exports = {
  
  signIn,
  getEmployeeByEmail,
  updateEmployee,
  sendProductRequest,

};
