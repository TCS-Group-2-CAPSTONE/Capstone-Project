let requestModel = require("../model/request.model");

let viewRequests = (request, response) => {
    requestModel.find({}, (error, result) =>{
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

module.exports = {viewRequests, addRequest}