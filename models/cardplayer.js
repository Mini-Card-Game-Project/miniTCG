'use strict';
module.exports = (sequelize, DataTypes) => {
  var CardPlayer = sequelize.define('CardPlayer', {
    CardId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER
  }, {});
  CardPlayer.associate = function(models) {
    // associations can be defined here
  };
  return CardPlayer;
};