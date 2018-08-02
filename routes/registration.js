const router = require('express').Router();
const model = require('../models');

router.get ('/', (req, res)=> {
  res.render ('registration/index', {errors:null});
})

router.post ('/', (req, res)=> {
  let newPlayer = {
    username: req.body.username,
    password: req.body.password,
    deposit: null,
    avatar: null
  }
  model.Player
  .create(newPlayer)
  .then(()=> {
    req.session.username = req.body.username
    res.redirect('/account');
  })
  .catch(err => {
    res.render('registration/index', {errors: err.errors});
  })
})

module.exports = router;