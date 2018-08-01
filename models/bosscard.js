'use strict';
module.exports = (sequelize, DataTypes) => {
  var BossCard = sequelize.define('BossCard', {
    CardId: DataTypes.INTEGER,
    BossId: DataTypes.INTEGER
  }, {});
  BossCard.associate = function(models) {
    // associations can be defined here
  };
  return BossCard;
};