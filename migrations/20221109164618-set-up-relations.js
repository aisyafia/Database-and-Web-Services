"use strict";

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.addColumn("users", "todolistId", {
      type: sequelize.INTEGER,
      references: {
        model: "todolists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, sequelize) {
    await queryInterface.removeColumn("users", "todolistId");
  },
};
