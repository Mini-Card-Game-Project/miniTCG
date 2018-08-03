"use strict";
 module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */
    return queryInterface.bulkInsert(
      "Bosses",
      [
        {
          name: "Absalom",
          effect: "Damnation",
          image: "https://i.imgur.com/m7WtUlz.png"
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