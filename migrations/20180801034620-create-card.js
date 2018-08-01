'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      rarity: {
        type: Sequelize.STRING
      },
      element: {
        type: Sequelize.STRING
      },
      attack: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      health: {
        type: Sequelize.INTEGER
      },
      effect: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Cards');
  }
};

