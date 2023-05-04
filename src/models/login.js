const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    name: {
        required:true,
        type:String
    },
    email:String,
    user_id:String
})

const LoginModel = mongoose.model('Login',Login)

module.exports = LoginModel