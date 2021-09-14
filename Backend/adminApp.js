let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let adminRouter = require("./router/admin.router");


let app = express();


app.use(cors());
app.use(bodyParser.json());

let url = "mongodb://localhost:27017/tcsmean";
mongoose.connect(url).then(result=>console.log("connected")).catch(err=>console.log(err));

app.use("/adminLogin", adminRouter);


app.listen(9090,()=>console.log("Server running on port number 9090"));