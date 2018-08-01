const router = require('express').Router();
const model = require('../models');
const bcrypt = require('bcrypt');
const account = require('./account');
const deckList = require('./deckList');
const payment = require('./payment');
const registration = require('./registration');
const lobby = require('./lobby');
const admin = require ('./admin')
const isLoggedIn = require ('../helpers/isLoggedIn');

router.get('/', (req, res) => {
  res.render('home/index')
})

router.post('/', (req, res)=> {
  model.Player
  .find({
    where : {
      username: req.body.username,
    }
  })
  .then(player=>{
    if (player){
      res.redirect('/account')
    } else {
      res.render('home/index', {errors: [{message: 'wrong username / password'}]})
    }
  })
})

router.use('/adminnih', admin)
router.use('/account', account);
router.use('/deckList', isLoggedIn, deckList);
router.use('/payment', isLoggedIn, payment);
router.use('/registration', registration);
router.use('/lobby', isLoggedIn, lobby);

module.exports = router;