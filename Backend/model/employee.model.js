let mongoose = require("mongoose");
mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    _id: {type: Number},
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String},
    password: {type: String, default: "defaultPass"}
});

let employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;
