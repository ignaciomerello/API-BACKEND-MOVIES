'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User); //inversa de One to Many
      this.belongsToMany(models.Movie, { through:'OrderMovie'});    }
  };
  Order.init({
    userId: DataTypes.INTEGER,
    returnDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};