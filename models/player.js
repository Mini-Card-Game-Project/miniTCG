'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    deposit: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};