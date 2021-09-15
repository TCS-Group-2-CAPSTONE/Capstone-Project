let adminModel = require("../model/admin.model");
let employeeModel = require("../model/employee.model");

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

let deleteEmployee = (request, response) => {
    let employeeId = request.params.employeeId;
    employeeModel.deleteOne({_id: employeeId}, (error, result) => {
        if (result.deletedCount == 1) {
            response.send(`employee number ${employeeId} has been deleted`);
        }
        else {
            response.send(`employee ${employeeId} has not been deleted`);
        }
    })
}

module.exports = { signIn, addEmployee, deleteEmployee}