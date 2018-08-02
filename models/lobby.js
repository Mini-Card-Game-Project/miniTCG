'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lobby = sequelize.define('Lobby', {
    Player1Id: DataTypes.INTEGER,
    Player2Id: DataTypes.INTEGER
  }, {});
  Lobby.associate = function(models) {
    Lobby.belongsTo(models.Player, {as: 'Player1', foreignKey: 'Player1Id'});
    Lobby.belongsTo(models.Player, {as: 'Player2', foreignKey: 'Player2Id'});
  };
  return Lobby;
};