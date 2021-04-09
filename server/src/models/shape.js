"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shape extends Model {
    // TODO:: Implement relationship between user and shape
  }
  Shape.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dimension: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      result: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Shape",
    }
  );
  return Shape;
};
