'use strict';
 module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addConstraint('Players', ['username'], {
      type: 'unique',
      name: 'custom_unique_username'
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },
   down: (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('Players', 'custom_unique_username')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.dropTable('users');
    */
  }
};