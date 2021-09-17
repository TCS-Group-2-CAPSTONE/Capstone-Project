let requestModel = require("../model/request.model");

//function to pull all requests from request table
let viewRequests = (request, response) => {
    requestModel.find({resolved:false}, (error, result) =>{
        if (!error) {
            response.send(result);
        }
        else {
            response.send(error);
        }
    })
}

//function to add a request to the request table
let addRequest = (request, response) => {
    requestModel.insertMany(request.body, (error, result) => {
        if (!error) {
            response.send("added the request successfully");
        }
        else {
            response.send("did not add request");
        }
    })
}

//function to delete a request from the request table. called by admin
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

module.exports = {viewRequests, addRequest, deleteRequest}