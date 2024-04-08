const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Authentication")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const usermodel = mongoose.model("user",userSchema)
module.exports = usermodel;