let mongoose = require("mongoose");
mongoose.pluralize(null);

//productsRequested is an array of product objects
let requestSchema = mongoose.Schema({
    _id: {type: Number},
    productsRequested: {type: [{
        name: {type: String, required: true},
        action: {type: String, required: true},
        quantity: {type: Number}
    }]}
});

let requestModel = mongoose.model("Request", requestSchema);

module.exports = requestModel;
