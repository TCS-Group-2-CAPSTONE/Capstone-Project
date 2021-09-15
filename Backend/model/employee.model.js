const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let schema = mongoose.Schema;

let employee = new schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email_address: {type: String, required: true, unique: true},
    e_password:String,          //must be auto-generated when employee is first added by the admin
    first_login:Boolean
});
module.exports = mongoose.model('Employee',employee);
