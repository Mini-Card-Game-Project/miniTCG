'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lobby = sequelize.define('Lobby', {
    PlayerId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER
  }, {});
  Lobby.associate = function(models) {
    // associations can be defined here
  };
  return Lobby;
};