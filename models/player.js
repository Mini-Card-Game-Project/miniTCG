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
    // associations can be defined here
  };

  Player.hook('beforeCreate', (player, options) => {
    return bcrypt.hash(player.password, 8)
    .then(function(hash) {
      player.password = hash;
    });

  });

  return Player;
};