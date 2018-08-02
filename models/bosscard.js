'use strict';
module.exports = (sequelize, DataTypes) => {
  var BossCard = sequelize.define('BossCard', {
    CardId: DataTypes.INTEGER,
    BossId: DataTypes.INTEGER
  }, {});
  BossCard.associate = function(models) {
    BossCard.belongsTo(models.Boss);
    BossCard.belongsTo(models.Card);
  };
  return BossCard;
};