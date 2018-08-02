'use strict';

module.exports = (sequelize, DataTypes) => {
  const bcrypt = require ('bcrypt');
  var Player = sequelize.define('Player', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please input the username!'
        },
      },
      unique: {
        args: true,
        msg: 'Username already taken :/'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please input the password!'
        },
      }
    },
    deposit: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {});

  Player.associate = function(models) {
    Player.belongsToMany(models.Card, {through: models.CardPlayer});
    Player.hasMany(models.CardPlayer);
    Player.hasMany(models.Lobby, { as: 'Player2', foreignKey: 'Player2Id' });
    Player.hasMany(models.Lobby, { as: 'Player1', foreignKey: 'Player1Id' });
    Player.belongsToMany(Player, { as: 'Player1', through: models.Lobby, foreignKey: 'Player1Id' })
    Player.belongsToMany(Player, { as: 'Player2', through: models.Lobby, foreignKey: 'Player2Id' })
  };

  Player.hook('beforeCreate', (player, options) => {
    return bcrypt.hash(player.password, 8)
    .then(function(hash) {
      player.password = hash;
    });

  });

  return Player;
};