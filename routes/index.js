const router = require('express').Router();
const account = require('./account');
const deckList = require('./deckList');
const payment = require('./payment');
const registration = require('./registration');
const lobby = require('./lobby');
const battle = require('./battle');
const isLoggedIn = require ('../helpers/isLoggedIn');

router.get('/', (req, res) => {
  res.render('home/index')
})

router.use('/account', account);
router.use('/deckList', deckList);
router.use('/payment', isLoggedIn, payment);
router.use('/registration', registration);
router.use('/lobby', lobby);
router.use('/battle', battle);


module.exports = router;