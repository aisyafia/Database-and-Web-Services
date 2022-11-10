"use strict";

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.addColumn("todolists", "userId", {
      type: sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("todoitems", "todolistId", {
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
    await queryInterface.removeColumn("todolists", "userId");
    await queryInterface.removeColumn("todoitems", "todolistId");
  },
};
