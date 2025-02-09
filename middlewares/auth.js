const {getUser} = require('../service/auth')
async function restrictToLoggedinUserOnly(req, res, next)
{
    // middleware for checking user is already register or not 
    const userUid = req.cookies?.uid;
    if(!userUid) return  res.redirect('login')

     const user = getUser(userUid);
     if(!userUid) return res.render('login')
 
      req.user = user;
      next();

}

module.exports = {
    restrictToLoggedinUserOnly
}
