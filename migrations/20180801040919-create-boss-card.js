'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BossCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CardId: {
        type: Sequelize.INTEGER
      },
      BossId: {
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
    return queryInterface.dropTable('BossCards');
  }
};