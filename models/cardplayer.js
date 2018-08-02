'use strict';
module.exports = (sequelize, DataTypes) => {
  var CardPlayer = sequelize.define('CardPlayer', {
    CardId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER
  }, {});
  CardPlayer.associate = function(models) {
    CardPlayer.belongsTo(models.Player);
    CardPlayer.belongsTo(models.Card);
  };
  return CardPlayer;
};