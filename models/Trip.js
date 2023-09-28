const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Trip extends Model {}

Trip.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    traveller_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "traveler",
        key: "id",
        unique: false,
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trip",
  }
);

module.exports = Trip;
