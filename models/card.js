'use strict';
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    rarity: DataTypes.STRING,
    element: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    effect: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};