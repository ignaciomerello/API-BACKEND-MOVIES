'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {

    
    static associate(models) {
      this.belongsToMany(models.Movie, {through:'ActorMovie'});
      
    }
  };
  Actor.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    profile_path: DataTypes.STRING,
    popularity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};