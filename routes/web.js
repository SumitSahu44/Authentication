const express = require("express");
const route = express.Router();
const authFile = require("../controllers/auth")


route.get("/",authFile().registerController)
route.get("/login",authFile().loginController)
route.get("/dashboard",(req,res)=>{
    res.send("Welome to dashboard page")
})
route.get("*",(req,res)=>{
    res.send("404 Not found")
})


module.exports = route;