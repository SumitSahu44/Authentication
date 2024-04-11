 function authController()
 {
    return {
    registerController(req,res)
    {
        res.render("register.ejs");
    },
    loginController(req,res)
    {
        res.send("login done")
    }

  }
 }

 module.exports = authController