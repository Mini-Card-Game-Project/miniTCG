'use strict';
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcrypt')
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
        len: {
          args: [8,100],
          msg: 'Minimum password length is 8 character!'
        }
      }
    },
    deposit: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    loses: DataTypes.INTEGER,
    deckCards: DataTypes.INTEGER,
  }, {});
  Player.associate = function(models) {
    Player.belongsToMany(models.Card, {through: models.CardPlayer});
    Player.hasMany(models.CardPlayer);
    Player.belongsToMany(Player, { as: 'Player2', through: models.Lobby, foreignKey: 'Player1Id' });
    Player.belongsToMany(Player, { as: 'Player1', through: models.Lobby, foreignKey: 'Player2Id' });
  };

  Player.hook('beforeCreate', (player, options) => {
    return bcrypt.hash(player.password, 8)
    .then(function(hash) {
      player.password = hash;
    });
   });

   Player.prototype.winRate = function (){
    if(this.wins > 0 && this.loses > 0){
      return (this.wins / (this.wins + this.loses)).toFixed(2) * 100
    }
    return 'Not available yet'
  }
   Player.loginCheck = function (username, password, cb){
    Player
    .find({
      where : {
        username: username,
      }
    })
    .then(player=> {
      if(player){
        bcrypt.compare(password, player.password, function(err, result) {
          if (err){
            throw err;
          }
          return cb(result);
        })
      } else {
        return cb(null)
      }
    })
    
  }
   
  return Player;
};