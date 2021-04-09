"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shape extends Model {
    static associte(models) {
      Shape.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
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
