const router = require("express").Router();
const model = require("../models");

router.get("/", (req, res) => {
  model.Card.findAll().then(monsters => {
    // monsters diacak =  [1,2,3]
    
    
    res.render("battle/battle", { monsters });
  });
});

router.get("/tes", (req, res) => {
  model.Card.findAll().then(cards => {
    res.render("payment/tes");
  });
});

router.post("/match",(req, res) => {


 // manipulasi session match

 // redirect(match)
})

module.exports = router;
