'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Actor, {through:'ActorMovie'});
      this.belongsToMany(models.Order, { through: 'OrderMovie' });

    }
  };
  Movie.init({
    title: DataTypes.STRING,
    img_path: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};