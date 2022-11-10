"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "Feed the bunnies",
          deadline: "today",
          important: true,
          todolistId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Water the plants",
          deadline: "today",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Make tiramisu",
          deadline: "weekend",
          important: false,
          todolistId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy Christmas gifts",
          deadline: "december",
          important: false,
          todolistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Spread the SVG gospel",
          deadline: "everyday",
          important: true,
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy boots",
          deadline: "weekend",
          important: false,
          todolistId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoitems", null, {});
  },
};
