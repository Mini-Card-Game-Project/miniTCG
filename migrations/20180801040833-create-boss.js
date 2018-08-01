"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Bosses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      health: {
        type: Sequelize.INTEGER
      },
      effect: {
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: new Date(),

        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),

        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Bosses");
  }
};
