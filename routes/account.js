const router = require('express').Router();
const model = require('../models');
 router.get('/', (req, res) => {
  model.Player
  .find({
    where: {username: req.session.username}
  })
  .then(player => {
    res.render('account/index', {player});
  })
})

module.exports = router;