const router = require('express').Router();
const model = require('../models');
const account = require('./account');
const deckList = require('./deckList');
const payment = require('./payment');
const registration = require('./registration');
const lobby = require('./lobby');
const battle = require('./battle');
const isLoggedIn = require ('../helpers/isLoggedIn');

router.get('/', (req, res) => {
  model.Boss.findAll().then(boss => {
    
    res.render("./home/index", {errors: null, boss:boss });
  });
})

router.post('/', (req, res)=> {
  model.Player
  .loginCheck(req.body.username, req.body.password, (result) => {
    if (result != null){
      if(result == true){
        req.session.username = req.body.username;
        res.redirect('/account')
      } else {
        res.render('home/index', {errors: [{message: 'wrong password'}]})
      }
    } else {
      res.render('home/index', {errors: [{message: 'Username not found, register first!'}]})
    }
  })
})

router.get('/logout', (req, res)=> {
  req.session.destroy();
  res.redirect('/')
})

router.use('/account', isLoggedIn, account);
router.use('/decklist', isLoggedIn, deckList);
router.use('/payment', isLoggedIn, payment);
router.use('/registration', registration);
router.use('/lobby', isLoggedIn, lobby);
router.use('/battle', isLoggedIn, battle);


module.exports = router;