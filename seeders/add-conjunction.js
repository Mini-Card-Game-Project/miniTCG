"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
 
    */
    return queryInterface.bulkInsert(
      "CardPlayers",
      [
        {
          CardId: 1,
          PlayerId: 3,
        },
        {
          CardId: 2,
          PlayerId: 3,
        },
        {
          CardId: 3,
          PlayerId: 3,
        },
        {
          CardId: 4,
          PlayerId: 3,
        },
        {
          CardId: 5,
          PlayerId: 3,
        },
        {
          CardId: 6,
          PlayerId: 3,
        },
        {
          CardId: 7,
          PlayerId: 3,
        },
        {
          CardId: 8,
          PlayerId: 3,
        },
        {
          CardId: 9,
          PlayerId: 3,
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
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

