// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
//let routerProduct = require("./router/product.router");
let routerUser = require("./router/user.router");
let routeProduct = require("./router/product.router");

// create the reference of express 
let app = express();

// add middleware    
app.use(cors());
app.use(bodyParser.json())

//url database   
let url = "mongodb://localhost:27017/groceryCap"   

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

// middleware which help to match main path and pass the
// request to router file. 
// http://localhost:9090/api/product/getAllProducts     : Get 
// http://localhost:9090/api/product/storeProduct       : Post 
// http://localhost:9090/api/product/deleteProduct       : Delete 
// http://localhost:9090/api/product/updateProduct       : Update 


//http://localhost:9090/api/user/signIn    :post signUp
//http://localhost:9090/api/user/signUp     :post signIn
//http://localhost:9090/api/user/updateDetails     :put updateUser
//http://localhost:9090/api/user/userId    :get userId
// app.use("/api/product",routerProduct);
  
app.use("/api/user",routerUser);
app.use("/api/product",routeProduct);

// app.use("/api/order",routerOrder);
// app.use("/api/login",routerLogin);
app.listen(9090,()=>console.log("Server running on port number 9090"))


