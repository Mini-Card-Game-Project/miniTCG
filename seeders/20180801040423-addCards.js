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
          effect:"fire_king",
          image:"https://i.imgur.com/PAjSdEO.png"
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
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
