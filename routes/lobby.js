const router = require('express').Router();
const model = require('../models');

router.get ('/', (req, res)=> {
  res.render ('lobby/index')
})

module.exports = router;