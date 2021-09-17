let requestModel = require("../model/request.model");

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