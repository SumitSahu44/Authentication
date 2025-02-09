const {v4: uuidv4} =  require('uuid');
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const userModel = require('../models/user')
const {setUser} = require('../service/auth') 
 function authController()
 {
    return {
     // register controller 
    registerController(req,res)
    {
        res.render("register");
    },
     async userregisterController(req,res)
    {
        const {name,email,password} = req.body;
        
       await userModel.create({name,email,password})
       res.render('dashboard')
    },
     // login controller 
    async loginController(req,res)
    {
        const {email,password} = req.body;
        
        const user = await userModel.findOne({email,password})
       
        if(!user){
            return res.render('login', {
                error: "Invalid username or password"
            })
        }
        const sessionId = uuidv4(); 
        setUser(sessionId, user);
        res.cookie("uid", sessionId);
        return  res.redirect('dashboard')
    }

  }
 }

 module.exports = authController
