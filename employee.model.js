let mongoose = require("mongoose");
mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    _id = Number,
    username = String,
    password = String
});

let employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;
