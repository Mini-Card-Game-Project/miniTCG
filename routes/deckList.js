const router = require('express').Router();
const model = require('../models');

router.get('/', (req, res) => {
  model.Player
  .find({
    where: {username: req.session.username},
    include: [{
      model: model.Card,
      where: { id: { $notIn: arrDeckList} }
  }]
  })
  .then(player => {
    let arrDeckList = String(player.deckCards).split(',');
    return model.Card
    .findAll({
      where: {
        id: {
          $in: arrDeckList
        }
      }
    })
    .then(deck => {
      res.render('deckList/index', {deck:deck, cards:player.Cards})
    })
  })
  .catch(err=> {
    console.log(err)
  })
})

module.exports = router;