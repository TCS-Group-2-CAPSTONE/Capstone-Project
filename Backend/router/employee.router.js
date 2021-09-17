// load the express module 
const express = require('express');
// import employee controller
const employeeController = require('../controller/employee.controller');


const routes = express.Router();

//Route for employee Sign in
routes.post('/signIn',employeeController.signIn);
//Route for get employee by email address
routes.get('/getEmployeeByEmail/:email',employeeController.getEmployeeByEmail);
//Route for update employee password
routes.post('/updateEmp/:email',employeeController.updateEmployee);
//Route for send Request to the Admin
routes.post('/sendRequest',employeeController.sendProductRequest);

module.exports = routes;
