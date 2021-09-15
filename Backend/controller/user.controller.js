const { response } = require("express");
let userModel = require("../model/user.model");

let signUp = async (request, response)=>{

    let user = request.body;  //recieve the data from the post method
    let userInfo = await userModel.findOne({userId:user.userId});
    if(userInfo == null){
        let result = await userModel.insertMany(user); //tells process to wait
        response.send("Account created successfully")
    }else{
        response.send("User Id must be unique");
    }
  
}

let signIn = async (request, response)=>{
    let user = request.body;  //recieve the data from the post method
    let userInfo = await userModel.findOne({userId:user.userId, password:user.password});
    if(userInfo != null){
        response.send("Success");
    }else{
        response.send("Invalid ")
    }
  

}

module.exports = {signIn,signUp};