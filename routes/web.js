const express = require("express");
const route = express.Router();

route.get("/",(req,res)=>{
      res.send("register")
})
route.get("/login",(req,res)=>{
    res.send("login")
})
route.get("/dashboard",(req,res)=>{
    res.send("Welome to dashboard page")
})
route.get("*",(req,res)=>{
    res.send("404 Not found")
})


module.exports = route;