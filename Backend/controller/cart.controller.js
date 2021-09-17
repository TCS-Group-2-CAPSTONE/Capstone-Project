const { response } = require("express");
let cartModel = require("../model/cart.model");


//insert data
let addCartDetails = async (request, response)=>{

    let productName = request.body;  //recieve the data from the post method

        cartModel.insertMany(productName, (error, result)=> {
            if(!error) {
                response.send(`Added Successfully`);
            }
            else {
                response.send(`Did not add product ${productName.name}`);
            }
        });
    }

    //delete products from the cart
    let deleteRequest = (request, response) => {
        let requestId = request.params.requestId;
        requestModel.deleteOne({_id: requestId}, (error, result) => {
            if (result.deletedCount > 0 ) {
                response.send("deleted the request");
            }
            else {
                response.send("did not delete the request");
            }
        })
    }

    //retrive products from the ccart
    let retriveProduct = (request, response)=>{
        cartModel.find({}, (error,result)=>{
            if(error){
                response.send(error)
            }else{
                response.json(result)
                console.log(result);
            }
        })
    }
        
  

module.exports = {addCartDetails, retriveProduct};