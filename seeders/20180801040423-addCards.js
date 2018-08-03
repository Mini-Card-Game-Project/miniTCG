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
          name: "Djinn",
          rarity: "SR",
          element: "fire",
          attack: "6",
          speed: "4",
          health: "340",
          effect: "Cursed fire",
          image: "https://i.imgur.com/JFSF2V1.png",
          type: "monster"
        },
        {
          name: "leviathan",
          rarity: "SR",
          element: "water",
          attack: "7",
          speed: "6",
          health: "560",
          effect: "tidalwave",
          image: "https://i.imgur.com/9YMOrUX.png",
          type: "monster"
        },
        {
          name: "Mordecai",
          rarity: "SR",
          element: "fire",
          attack: "6",
          speed: "6",
          health: "460",
          effect: "nullify",
          image: "https://i.imgur.com/dbFwYTr.png",
          type: "monster"
        },
        {
          name: "Odin",
          rarity: "UR",
          element: "light",
          attack: "8",
          speed: "8",
          health: "650",
          effect: "zentatsuken",
          image: "https://i.imgur.com/M2lpHxg.png",
          type: "monster"
        },
        {
          name: "Satan",
          rarity: "SR",
          element: "dark",
          attack: "5",
          speed: "8",
          health: "330",
          effect: "devils_tutor",
          image: "https://i.imgur.com/hRYjfRS.png",
          type: "monster"
        },
        {
          name: "Titan",
          rarity: "SR",
          element: "earth",
          attack: "6",
          speed: "3",
          health: "800",
          effect: "quake",
          image: "https://i.imgur.com/LqwuxlB.png",
          type: "monster"
        },
        {
          name: "Diablos",
          rarity: "UR",
          element: "dark",
          attack: "9",
          speed: "5",
          health: "680",
          effect: "dark_hole",
          image: "https://i.imgur.com/sBMKJkM.png",
          type: "monster"
        },
        {
          name: "Bahamut",
          rarity: "UR",
          element: "dark",
          attack: "8",
          speed: "6",
          health: "780",
          effect: "mega_flare",
          image: "https://i.imgur.com/BgnhMjw.png",
          type: "monster"
        },
        {
          name: "Ifreet",
          rarity: "UR",
          element: "fire",
          attack: "7",
          speed: "8",
          health: "440",
          effect: "hell_fire",
          image: "https://i.imgur.com/grakxKe.png",
          type: "monster"
        },
        {
          name: "Poseidon",
          rarity: "SR",
          element: "Water",
          attack: "7",
          speed: "5",
          health: "600",
          effect: "Tidal Storm",
          image: "https://i.imgur.com/67eHyiZ.png",
          type: "monster"
        },
        {
          name: "Metatron",
          rarity: "SR",
          element: "light",
          attack: "10",
          speed: "3",
          health: "350",
          effect: "deus ex machina",
          image: "https://i.imgur.com/3VKlZ6V.png",
          type: "monster"
        },
        {
          name: "cerberus",
          rarity: "UR",
          element: "fire",
          attack: "9",
          speed: "5",
          health: "630",
          effect: "hell gate",
          image: "https://i.imgur.com/dNuKxCr.png",
          type: "monster"
        },
        {
          name: "tiamat",
          rarity: "UR",
          element: "light",
          attack: "9",
          speed: "2",
          health: "680",
          effect: "tetra_flare",
          image: "https://i.imgur.com/uJrjTtt.png",
          type: "monster"
        },       {
          name: "lucifer the morningstar",
          rarity: "UR",
          element: "light",
          attack: "12",
          speed: "8",
          health: "920",
          effect: "end of the world",
          image: "https://i.imgur.com/qPfOlkC.png",
          type: "monster"
        }
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
    return queryInterface.bulkDelete("Cards", null, {});
  }
};
