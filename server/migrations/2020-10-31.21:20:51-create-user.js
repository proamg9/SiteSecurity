"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_pass: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        required: true,
      },
      date: {
        type: Sequelize.DATE,
        default: Date.now(),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
