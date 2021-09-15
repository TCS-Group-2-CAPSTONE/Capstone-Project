let mongoose = require("mongoose");
mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    _id: {type: Number},
    productsRequested: {type: [{
        name: {type: String},
        action: {type: String},
        quantity: {type: Number}
    }]}
});

let requestModel = mongoose.model("Request", requestSchema);

module.exports = requestModel;
