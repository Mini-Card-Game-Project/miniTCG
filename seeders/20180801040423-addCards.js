"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
   
    */
    return queryInterface.bulkInsert(
      "Cards",
      [
        {
          name: "Percival",
          rarity: "UR",
          element: "fire",
          health: "5",
          effect: "fire_king",
          image: "https://i.imgur.com/PAjSdEO.png",
          type: "leader"
        },
        {
          name: "Siegfried",
          rarity: "UR",
          element: "dark",
          health: "7",
          effect: "soul_eater",
          image: "https://i.imgur.com/7HkJpvF.png",
          type: "leader"
        },{
          name: "Ifreet",
          rarity: "SR",
          element: "fire",
          attack: "6",
          speed: "4",
          health: "8",
          effect: "hellfire",
          image: "https://i.imgur.com/JFSF2V1.png",
          type: "monster"
        },{
          name: "leviathan",
          rarity: "SR",
          element: "water",
          attack: "5",
          speed: "6",
          health: "8",
          effect: "tidalwave",
          image: "https://i.imgur.com/9YMOrUX.png",
          type: "monster"
        },{
          name: "Mordecai",
          rarity: "SR",
          element: "fire",
          attack: "6",
          speed: "6",
          health: "7",
          effect: "nullify",
          image: "https://i.imgur.com/dbFwYTr.png",
          type: "monster"
        },{
          name: "Odin",
          rarity: "UR",
          element: "light",
          attack: "8",
          speed: "8",
          health: "8",
          effect: "zentatsuken",
          image: "https://i.imgur.com/M2lpHxg.png",
          type: "monster"
        },{
          name: "Satan",
          rarity: "SR",
          element: "dark",
          attack: "4",
          speed: "8",
          health: "6",
          effect: "devils_advocate",
          image: "https://i.imgur.com/hRYjfRS.png",
          type: "monster"
        },{
          name: "Titan",
          rarity: "SR",
          element: "earth",
          attack: "6",
          speed: "3",
          health: "8",
          effect: "quake",
          image: "https://i.imgur.com/LqwuxlB.png",
          type: "monster"
        },{
          name: "Diablos",
          rarity: "UR",
          element: "dark",
          attack: "9",
          speed: "5",
          health: "6",
          effect: "dark_hole",
          image: "https://i.imgur.com/sBMKJkM.png",
          type: "monster"
        },{
          name: "Bahamut",
          rarity: "UR",
          element: "dark",
          attack: "8",
          speed: "6",
          health: "7",
          effect: "mega_flare",
          image: "https://i.imgur.com/BgnhMjw.png",
          type: "monster"
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
   return queryInterface.bulkDelete('Cards', null, {});

  }
};
