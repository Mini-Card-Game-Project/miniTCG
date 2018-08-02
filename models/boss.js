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
    // associations can be defined here
  };
  return Boss;
};
