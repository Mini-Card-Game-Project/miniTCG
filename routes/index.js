const router = require('express').Router();
const account = require('./account');
const deckList = require('./deckList');
const payment = require('./payment');
const registration = require('./registration');
const lobby = require('./lobby');
const isLoggedIn = require ('../helpers/isLoggedIn');
const battle = require('./battle');


router.get('/', (req, res) => {
  res.render('index')
})

router.use('/account', account);
router.use('/deckList', deckList);
router.use('/payment', isLoggedIn, payment);
router.use('/registration', registration);
router.use('/lobby', lobby);
router.use('/battle', battle);




module.exports = router;