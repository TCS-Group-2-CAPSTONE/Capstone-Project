let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    userId:{type:String, unique:true, required:true},
    email:{type:String, required:true},
    resolved:{type:Boolean, required:true},
    action: {
		type: String,
		required: true
	}
   
  
});

let raiseTicketModel = mongoose.model("raiseTicket", userSchema);

module.exports = raiseTicketModel;