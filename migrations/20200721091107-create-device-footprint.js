'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('device_footprints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ip_address: {
        type: Sequelize.STRING
      },
      browser: {
        type: Sequelize.STRING
      },
      os: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      useragent: {
        type: Sequelize.STRING
      },
      currenturl: {
        type: Sequelize.STRING
      },
      encription: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('device_footprints');
  }
};