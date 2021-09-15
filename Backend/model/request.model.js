let mongoose = require("mongoose");
mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    _id: Number,
    productId: Number,
    price: Number,
    quantity: Number
});

let productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
