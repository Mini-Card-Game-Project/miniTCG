const router = require('express').Router();
const model = require('../models')

router.get ('/', (req, res)=> {
  res.render('payment/index',);
})

router.get ('/tes', (req, res)=> {
  model.Card
  .findAll()
  .then (cards => {
    
    res.render('payment/tes')
  })
})

module.exports = router;