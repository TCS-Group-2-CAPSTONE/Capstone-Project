const { response } = require("express");
let userModel = require("../model/user.model");

//function to let user sign up
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

//function to let user sign in
let signIn = async (request, response)=>{
    let user = request.body;  //recieve the data from the post method
    let userInfo = await userModel.findOne({userId:user.userId, password:user.password});
    if(userInfo != null){
        response.send("Success");
    }else{
        response.send("Invalid ")
    }

}

//function to update user info. all fields are optional
let updateUser = async (request, response)=>{
    let user = request.body;
    userModel.updateOne({userId:user.userId}, 
    {firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        dob:user.dob,
        phoneNumber:user.phoneNumber,
        Address:user.Address,
    }, (error, result)=>{
        if (result.modifiedCount == 1) {
            response.send(`updated user successfully`);
        }
        else {
            response.send(`did not update user `);
        }
    }) 
}

//function to retrieve a user's Id
let retriveUserId = (request, response)=>{
    let user = request.params.userId;
    userModel.findById({userId:user.userId}, (error,result)=>{
        if(error){
            response.send(error)
        }else{
            response.json(result)
            console.log(result);
        }
    })
}

module.exports = {signIn,signUp, updateUser, retriveUserId};