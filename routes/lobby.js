const router = require('express').Router();
const model = require('../models');

router.get ('/', (req, res)=> {
  model.Lobby
  .findAll({
  })
  .then(player => {
    res.json(player)
  })
})

module.exports = router;