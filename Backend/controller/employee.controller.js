const employee = require("../models/employeeModel");
const empConfig = require("../config/employeeConfig");
const validationHandler = require("../validators/validationHandler");
const jwt = require("jwt-simple");
let getAll = async (req, res, next) => {
  try {
    let emps = await employee.find();
    res.send(emps);
  } catch (err) {
    next(err);
  }
};
let signIn = async (req, res, next) => {
  try {
    let email_address = req.body.email;
    let pass = req.body.pass;

    let emp = await employee.findOne({ email_address });

    if (!emp) {
      const error = new Error("Wrong credentials: not a valid user");
      error.statusCode = 401;
      throw error;
    }

    if(pass != emp.e_password)
    {
        const error = new Error("Wrong credentials");
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.encode({ id: emp._id }, empConfig.secret);
    res.send({ token });
  } catch (err) {
    console.log(err);
  }
};

let isValid = async (req, res, next) => {
  try {
    res.send("Authorized");
  } catch (error) {
    next(error);
  }
};
let addEmployee = async (req, res, next) => {
  try {
    validationHandler(req);
    let newEmp = new employee();

    newEmp.firstName = req.body.firstName;
    newEmp.lastName = req.body.lastName;
    newEmp.email_address = req.body.email_address;

    newEmp.e_password = "1234";
    newEmp.first_login = true;
    await newEmp.save();
    res.send({ message: "Success", newEmp });
  } catch (err) {
    console.log(err);
  }
};

let deleteEmployee = async (req, res, next) => {
  try {
    let id = req.params.id;
    let emp = await employee.findById(id);
    if (emp == null) {
      let error = new Error("Bad request");
      error.statusCode = 400;
      throw error;
    }
    await emp.delete();
    res.send({ message: "deleted" });
  } catch (err) {
    next(err);
  }
};

let editPassword = async (req, res) => {
  
  try {
    let emp = req.user;
    emp.e_password = req.body.e_password;
    await emp.save();
    res.send("success");
  } catch (err) {
    console.log(error);
  }
};

module.exports = {
  addEmployee,
  deleteEmployee,
  getAll,
  editPassword,
  signIn,
  isValid,
};
