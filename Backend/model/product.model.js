let mongoose = require("mongoose");
mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    
    name: {type: String, unique: true, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    url: {type: String, required: true}
});

let productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
