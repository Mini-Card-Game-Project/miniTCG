"use strict";
module.exports = (sequelize, DataTypes) => {
  var Boss = sequelize.define(
    "Boss",
    {
      name: DataTypes.STRING,
      health: DataTypes.INTEGER,
      effect: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
  Boss.associate = function(models) {
    Boss.belongsToMany(models.Card, { through: models.BossCard });
    Boss.hasMany(models.BossCard);
  };
  return Boss;
};
