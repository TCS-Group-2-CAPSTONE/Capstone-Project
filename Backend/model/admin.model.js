let mongoose = require("mongoose");
mongoose.pluralize(null);

//admin schema for the admin model. all admin documents must be manually inserted in mongo
let adminSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

let adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;
