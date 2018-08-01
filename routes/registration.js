const router = require('express').Router();

router.get ('/', (req, res)=> {
  res.render ('registration/index')
})

module.exports = router;