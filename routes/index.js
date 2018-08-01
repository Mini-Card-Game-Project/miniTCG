const router = require('express').Router();
const account = require('./account');
const deckList = require('./deckList');
const payment = require('./payment');
const registration = require('./registration');

router.get('/', (req, res) => {
  res.render('home/index')
})

router.use('/account', account);
router.use('/deckList', deckList);
router.use('/payment', payment);
router.use('/registration', registration)


module.exports = router;