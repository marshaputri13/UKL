'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meja', {
      id_meja: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      nomor_meja: {
        type: Sequelize.INTEGER(100)
      },
      status: {
        type: Sequelize.ENUM('diisi','kosong')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meja');
  }
};