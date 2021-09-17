let adminModel = require("../model/admin.model");
let employeeModel = require("../model/employee.model");


//function to check valid admins on the admin table
let signIn = async (request, response) => {
    let loginInfo = request.body;

    let userInfo = await adminModel.findOne({ username: loginInfo.username, password: loginInfo.password });

    if (userInfo != null) {
        console.log(`user ${loginInfo.username} has logged in`);
        response.send("found")
    }
    else {
        console.log(`user ${loginInfo.username} did not log in due to wrong username/password`);
        response.send("not found");
    }
}

//function to add employee in to the employee table
let addEmployee = (request, response) => {
    let employee = request.body;
    employeeModel.insertMany(employee, (error, result) => {
        if (!error) {
            response.send(`employee ${employee.firstName} ${employee.lastName} has been added`);
        }
        else {
            response.send(`employee ${employee.firstName} ${employee.lastName} has not been added`);
        }
    })
}

//function to remove employee from the employee table
let deleteEmployee = (request, response) => {
    let employeeEmail = request.params.employeeEmail;
    
    employeeModel.deleteOne({email_address: employeeEmail}, (error, result) => {
        if (result.deletedCount == 1) {
            response.send(`employee with email ${employeeEmail} has been deleted`);
        }
        else {
            response.send(`employee with email ${employeeEmail} has not been deleted`);
        }
    })
}



//export the functions
module.exports = { signIn, addEmployee, deleteEmployee}