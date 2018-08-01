"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
 
    */
    return queryInterface.bulkInsert(
      "Players",
      [
        {
          username: 'Adefs',
          password: '123',
          deposit: 99999999,
          avatar: 'https://i.imgur.com/1JhhLUb.png'
        },
        {
          username: 'bryan',
          password: '123',
          deposit: 99999999,
          avatar: 'https://i.imgur.com/qew8zMv.png'
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

