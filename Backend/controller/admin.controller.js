let adminModel = require("../model/admin.model");

let signIn =  async (request, response) => {
    let loginInfo = request.body;
    
    let userInfo = await adminModel.findOne({username: loginInfo.username, password: loginInfo.password});
    
    if (userInfo!=null) {
        console.log(`user ${loginInfo.username} has logged in`);
        response.send("found")
    }
    else {
        console.log(`user ${loginInfo.username} did not log in due to wrong username/password`);
        response.send("not found"); 
    }
}

module.exports = {signIn}