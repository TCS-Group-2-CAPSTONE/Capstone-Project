let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String, unique:true},
    password:{type:String},
    dob:{type:Date},
    phoneNumber:{type:Number},
    Address:{type:String},
    userId:{type:String, unique:true}
});

let userModel = mongoose.model("user", userSchema);

module.exports = userModel;