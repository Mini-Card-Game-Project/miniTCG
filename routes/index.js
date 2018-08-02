const router = require('express').Router();
const model = require('../models');
const bcrypt = require('bcrypt');
const account = require('./account');
const deckList = require('./deckList');
const payment = require('./payment');
const registration = require('./registration');
const lobby = require('./lobby');
const admin = require ('./admin')
const battle = require('./battle');
const isLoggedIn = require ('../helpers/isLoggedIn');

router.get('/', (req, res) => {
  res.render('home/index', {errors: null})
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
      bcrypt.compare(req.body.password, player.password, function(err, result) {
        if (err){
          throw err;
        }
        if (result){
          req.session.username = req.body.username;
          res.redirect('/account')
        } else {
          res.render('home/index', {errors: [{message: 'wrong password'}]})
        }
    });
    } else {
      res.render('home/index', {errors: [{message: 'Username not found, register first!'}]})
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.use('/adminnih', admin)
router.use('/account', isLoggedIn, account);
router.use('/decklist', isLoggedIn, deckList);
router.use('/payment', isLoggedIn, payment);
router.use('/registration', registration);
router.use('/lobby', isLoggedIn, lobby);
router.use('/battle', isLoggedIn, battle);


module.exports = router;