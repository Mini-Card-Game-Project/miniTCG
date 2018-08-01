module.exports = function isLoggedIn (req, res, next){
  if (req.session.username){
    return next ()
  }
  return res.redirect('/')
}