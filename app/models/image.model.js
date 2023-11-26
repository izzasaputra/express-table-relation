const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Images = sequelize.define("image", {
  desc: {
    type: DataTypes.STRING,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Images;
