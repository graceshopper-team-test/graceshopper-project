const Sequelize = require("sequelize");
const db = require("../db");

const Carts = db.define("products", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Carts;
