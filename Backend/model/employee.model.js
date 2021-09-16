const mongoose = require('mongoose');

let schema = mongoose.Schema;

let employee = new schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email_address: {type: String, required: true, unique: true},
    e_password: {type: String, default: "1234"},          //must be auto-generated when employee is first added by the admin
    first_login:{type: Boolean, default: true}
});

module.exports = mongoose.model('Employee',employee);
