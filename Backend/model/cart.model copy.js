let mongoose = require("mongoose");
mongoose.pluralize(null);

let userCartSchema = mongoose.Schema({
  
    // userId: {type: String},
    name: {type: String}, 
    quantity: {type: Number},
    price:{type:Number},
    url:{type:String}
  
});

let cartModel = mongoose.model("Cart", userCartSchema);

module.exports = cartModel;