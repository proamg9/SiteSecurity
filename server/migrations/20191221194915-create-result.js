'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      repositoryName: {
        type: Sequelize.STRING
      },
      findings: {
        type: Sequelize.JSONB
      },
      queuedAt: {
        type: Sequelize.DATE
      },
      scannedAt: {
        type: Sequelize.DATE
      },
      finishedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Results');
  }
};
