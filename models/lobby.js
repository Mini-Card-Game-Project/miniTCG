'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lobby = sequelize.define('Lobby', {
    Player1Id: DataTypes.INTEGER,
    Player2Id: DataTypes.INTEGER,
    lobbyName: DataTypes.STRING
  }, {});
  Lobby.associate = function(models) {
  };
  return Lobby;
};