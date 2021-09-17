let productModel = require("../model/product.model");

//add product to the product table
let addProduct = (request, response) => {
    let product = request.body;
    console.log(product);
    productModel.insertMany(product, (error, result)=> {
        if(!error) {
            response.send(`Added product ${product.name} successfully`);
        }
        else {
            response.send(`Did not add product ${product.name}`);
        }
    });
}

//delete product on product table based on url params
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

//function to update a product. all fields are optional
let updateProduct = (request, response) => {
    let product = request.body;
    productModel.updateOne({name: product.name}, {$set: {price: product.price, quantity: product.quantity, url: product.url}},
        (error, result) =>{
            if (!error && result.modifiedCount > 0) {
                response.send(`updated product ${product.name} successfully`);
            }
            else {
                response.send(`did not update product ${product.name}`);
            }
        }
    )


}

//add new module retriveProduct
let retriveProduct = (request, response)=>{
    productModel.find({}, (error,result)=>{
        if(error){
            response.send(error)
        }else{
            response.json(result)
            console.log(result);
        }
    })
}

module.exports = {addProduct, deleteProduct, updateProduct, retriveProduct};