let mongoose = require("mongoose");
mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    
    username: {type: String, required: true},
    password: {type: String, required: true}
});

let adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;
