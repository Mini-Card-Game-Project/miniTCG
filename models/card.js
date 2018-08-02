"use strict";
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define(
    "Card",
    {
      name: DataTypes.STRING,
      rarity: DataTypes.STRING,
      element: DataTypes.STRING,
      attack: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      health: DataTypes.INTEGER,
      effect: DataTypes.STRING,
      image: DataTypes.STRING,
      type: DataTypes.STRING
    },
    {}
  );
  Card.associate = function(models) {
    Card.belongsToMany(models.Boss, {through: models.BossCard});
    Card.hasMany(models.BossCard);
    Card.belongsToMany(models.Player, {through: models.CardPlayer});
    Card.hasMany(models.CardPlayer);
  };
  return Card;
};
