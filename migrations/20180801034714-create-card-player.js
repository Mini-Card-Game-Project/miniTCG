'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CardPlayers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CardId: {
        type: Sequelize.INTEGER
      },
      PlayerId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        defaultValue:new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue:new Date(),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CardPlayers');
  }
};