const router = require('express').Router();
const model = require('../models');

router.get ('/', (req, res)=> {
  model.Lobby
  .findAll({
    where: {
      Player2Id : {
        $eq: null
      }
    }
  })
  .then(lobbies => {
    let arrPlayer1Id = []
    lobbies.forEach(lobby =>{
      arrPlayer1Id.push(lobby.Player1Id)
    })
    model.Player
    .findAll({
      where : {
        id : {
          $in : arrPlayer1Id
        }
      }
    })
    .then(players => {
      res.render('lobby/index', {lobbies:lobbies, players:players})
    })
  })
})
 router.post ('/', (req, res) => {
  model.Player
  .find({
    where: {username : req.session.username}
  })
  .then(player => {
    model.Lobby
    .create({
      Player1Id: player.id
    })
  })
})
 router.get('/join/:id', (req, res)=> {
  model.Player
  .find({
    where : {username: req.session.username}
  })
  .then(player => {
    model.Lobby
    .findById(req.params.id)
    .then(lobby=> {
      if (lobby.Player2Id){
        res.redirect('/lobby')
      } else {
        model.Lobby
        .update({
          Player2Id: player.id
        }, {where: {id: req.params.id}})
        .then(()=> {
          res.redirect('/battle')
        })
      }
    })

  })
})

module.exports = router;