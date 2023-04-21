'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menu', {
      id_menu: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      nama_menu: {
        type: Sequelize.STRING(100)
      },
      jenis: {
        type: Sequelize.ENUM('makanan','minuman')
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      gambar: {
        type: Sequelize.STRING(100)
      },
      harga: {
        type: Sequelize.INTEGER(100)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('menu');
  }
};