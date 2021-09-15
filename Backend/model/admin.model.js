let mongoose = require("mongoose");
mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String
});

let adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;
