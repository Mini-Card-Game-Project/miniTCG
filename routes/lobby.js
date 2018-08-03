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
      Player1Id: player.id,
      lobbyName: req.body.lobbyname
    })
    .then(()=>{
      res.redirect('/lobby')
    })
  })
})

 router.get('/join/:id', (req, res)=> {
  model.Player
  .find({
    where : {username: req.session.username},
  })
  .then(player => {
    model.Lobby
    .find({
      where: {Player1Id: req.params.id}
    })
    .then(lobby=> {
      if (lobby.Player2Id){
        res.redirect('/lobby')
      } else {
        model.Lobby
        .update({
          Player2Id: player.id
        }, {where: {id: req.params.id}})
        .then(()=> {
          
          model.Card.findAll().then(monsters => {
            let num1 = Math.ceil(Math.random() * monsters.length);
            let num2 = Math.ceil(Math.random() * monsters.length);
            console.log(num1);
            console.log(num2);
            monsters.forEach(monster => {
              // if (monster.type == "monster") {
              req.session.monster_player1 = monsters[num1];
              req.session.monster_player2 = monsters[num2];
            });
      
            let currentHealth1 = req.session.monster_player1.health;
            let currentHealth2 = req.session.monster_player2.health;
      
            var interval = setInterval(function battle() {
              function calculateHealth_1() {
                return (req.session.monster_player1.health / currentHealth1) * 100;
              }
      
              function calculateHealth_2() {
                return (req.session.monster_player2.health / currentHealth2) * 100;
              }
      
              if (req.session.monster_player2.health > 0) {
                req.session.monster_player2.health -=
                  req.session.monster_player1.attack;
                calculateHealth_2();
              }
      
              if (req.session.monster_player1.health > 0) {
                req.session.monster_player1.health -=
                  req.session.monster_player2.attack;
                calculateHealth_1();
              }
      
              if (req.session.monster_player1.health < 0) {
                req.session.monster_player1.health = 0;
                console.log(req.session.monster_player1.name);
              }
      
              if (req.session.monster_player2.health < 0) {
                req.session.monster_player2.health = 0;
                console.log(req.session.monster_player2.name);
              }
            });
            res.render("battle/battle", {
              monsters: monsters,
              monsters1: req.session.monster_player1,
              monsters2: req.session.monster_player2
            });
          });
        })
      }
    })
  })
})

  


module.exports = router;