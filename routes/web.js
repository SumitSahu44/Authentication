const express = require("express");
const route = express.Router();
const authFile = require("../controllers/auth")
const {restrictToLoggedinUserOnly} = require('../middlewares/auth')

route.get("/",authFile().registerController)
route.post("/register",authFile().userregisterController)



route.get('/login', (req,res)=>{
   
    res.render('login');
})
route.post("/login",authFile().loginController)
route.get("/dashboard",restrictToLoggedinUserOnly,(req,res)=>{
    res.render('dashboard');
})
route.get("*",(req,res)=>{
    res.send("404 Not found")
})


module.exports = route;