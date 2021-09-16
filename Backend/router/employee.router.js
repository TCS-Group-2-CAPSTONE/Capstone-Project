const express = require('express');
const employeeController = require('../controller/employee.controller');


const routes = express.Router();


routes.post('/signIn',employeeController.signIn);
routes.get('/getEmployeeByEmail/:email',employeeController.getEmployeeByEmail);
routes.post('/updateEmp/:email',employeeController.updateEmployee)
routes.post('/sendRequest',employeeController.sendProductRequest)

module.exports = routes;
