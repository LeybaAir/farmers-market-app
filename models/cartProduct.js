const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const UserProduct = require('./userProduct');
const UserShoppingCart = require('./userShoppingCart');


class CartProduct extends Model {}

CartProduct.init(
  {
    cart_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserShoppingCart,
        key: 'cart_id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserProduct,
        key: 'product_id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart_product',
  }
);

module.exports = CartProduct;
