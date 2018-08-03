const router = require("express").Router();
const model = require("../models");

router.get("/", (req, res) => {
  req.session.username = "ade";

  model.Card.findAll().then(monsters => {
    let num1 = Math.ceil(Math.random() * monsters.length);
    let num2 = Math.ceil(Math.random() * monsters.length);
    console.log(num1);
    console.log(num2);
    model.Boss.findOne().then(boss => {
      // console.log(boss);
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
  });
});
router.get("/event", (req, res) => {
  req.session.username = "ade";

  model.Card.findAll().then(monsters => {
    let num1 = Math.ceil(Math.random() * monsters.length);
    let num2 = Math.ceil(Math.random() * monsters.length);
    console.log(num1);
    console.log(num2);
    model.Boss.findOne().then(boss => {
      console.log(boss);
      monsters.forEach(monster => {
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
          let damage_player1;
          let skill = "Tachyon blue";
          if (skill == "Tachyon blue") {
            if (req.session.monster_player1.element == "water") {
              damage_player1 = req.session.monster_player1.attack + 10;
            }
          }
          req.session.monster_player2.health -= damage_player1;
          calculateHealth_2();
        }

        if (req.session.monster_player1.health > 0) {
          let damage_player2;
          let skill = "Damnation";
          if (skill == "Damnation") {
            if (req.session.monster_player2.element == "dark") {
              damage_player2 = req.session.monster_player2.attack + 30;
            }
          }

          req.session.monster_player1.health -= damage_player2;
          calculateHealth_1();
        }

        if (req.session.monster_player1.health < 0) {
          req.session.monster_player1.health = 0;
          console.log(req.session.monster_player1.name);

          clearInterval(interval);
        }

        if (req.session.monster_player2.health < 0) {
          req.session.monster_player2.health = 0;
          console.log(req.session.monster_player2.name);

          clearInterval(interval);
        }
      });

      res.render("battle/battleEvent", {
        monsters: monsters,
        monsters1: req.session.monster_player1,
        monsters2: req.session.monster_player2,
        boss: boss
      });
    });
  });
});

router.get("/tes", (req, res) => {
  model.Card.findAll().then(cards => {
    res.render("payment/tes");
  });
});
router.post("/match", (req, res) => {
  // manipulasi session match
  // redirect(match)
});
module.exports = router;