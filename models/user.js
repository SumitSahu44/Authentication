const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Authentication")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps: true})
const usermodel = mongoose.model("user",userSchema)
module.exports = usermodel;