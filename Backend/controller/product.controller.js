let productModel = require("../model/product.model");


let addProduct = (request, response) => {
    let product = request.body;
    productModel.insertMany(product, (error, result)=> {
        if(!error) {
            response.send(`Added product ${product.name} successfully`);
        }
        else {
            response.send(`Did not add product ${product.name}`);
        }
    });
}

let deleteProduct = (request, response) => {
    let productName= request.params.productName;
    productModel.deleteOne({name: productName}, (error, result)=> {
        if (result.deletedCount == 1) {
            response.send(`product ${productName} deleted successfully`);
        }
        else {
            response.send(`product ${productName} does not exist in our systems`);
        }
    });
}

let updateProduct = (request, response) => {
    let product = request.body;
    productModel.updateOne({name: product.name}, {$set: {price: product.price, quantity: product.quantity}},
        (error, result) =>{
            if (result.modifiedCount == 1) {
                response.send(`updated product ${product.name} successfully`);
            }
            else {
                response.send(`did not update product ${product.name}`);
            }
        }
    )


}

module.exports = {addProduct, deleteProduct, updateProduct};