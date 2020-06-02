"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          firstname: "Cristian",
          lastname: "Del Rio",
          phone: "3004323978",
          email: "cdelrio@email.com",
          updatedAt: new Date().toDateString(),
          createdAt: new Date().toDateString()
        },
        {
          firstname: "Naty",
          lastname: "Jaraba",
          phone: "3015193388",
          email: "naty@email.com",
          updatedAt: new Date().toDateString(),
          createdAt: new Date().toDateString()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
