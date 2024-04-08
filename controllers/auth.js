 function authController()
 {
    return {
    registerController(req,res)
    {
        res.send("registration done")
    },
    loginController(req,res)
    {
        res.send("login done")
    }

  }
 }

 module.exports = authController