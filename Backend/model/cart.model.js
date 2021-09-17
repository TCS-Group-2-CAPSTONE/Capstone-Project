let mongoose = require("mongoose");
mongoose.pluralize(null);

//cart scheme contains an array of products as a field.
let userCartSchema = mongoose.Schema({
    _id: {type: Number},
    userId: {type: Number},
    items: {type: [{
        name: {type: Number}, 
        quantity: {type: Number}
    }]}
});

let cartModel = mongoose.model("Cart", userCartSchema);

module.exports = cartModel;