const router = require('express').Router();

router.get ('/', (req, res)=> {
  res.render ('lobby/index')
})

module.exports = router;