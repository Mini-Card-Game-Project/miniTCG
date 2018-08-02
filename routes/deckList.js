const router = require('express').Router();
const model = require('../models');
 router.get('/', (req, res) => {
  model.Player
  .find({
    where: {username: req.session.username},
    include: [{
      model: model.Card,
  }]
  })
  .then(player => {
    let arrDeckList = String(player.deckCards).split(',');
    return model.Card
    .findAll({
      where: {
        name: {
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
 router.get('/edit', (req, res) => {
  model.Player
  .find({
    where: {username: req.session.username},
    include: [{
      model: model.Card,
  }]
  })
  .then(player => {
    res.render('deckList/edit', {cards:player.Cards})
  })
  .catch(err=> {
    console.log(err)
  })
})
 router.post('/edit', (req, res) => {
  let str = req.body.card1 + ',' + req.body.card2 + ',' + req.body.card3 + ',' + req.body.card4 + ',' + req.body.card5
  model.Player
  .update({
    deckCards: str
  },{
    where: {username: req.session.username},
  })
  .then(()=> {
    res.redirect('/decklist')
  })
  .catch(err=> {
    console.log(err)
  })
})


module.exports = router;