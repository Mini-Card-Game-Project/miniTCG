'use strict';
module.exports = (sequelize, DataTypes) => {
  var = sequelize.define('', {
    name: DataTypes.STRING,
    health: DataTypes.INTEGER,
    effect: DataTypes.STRING
  }, {});.associate = function(models) {
    // associations can be defined here
  };
  return;
};