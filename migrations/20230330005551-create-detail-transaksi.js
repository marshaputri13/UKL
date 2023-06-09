'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_transaksi', {
      id_detail_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      id_transaksi: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references : {
          model: "transaksi",
          key: "id_transaksi"
        }
      },
      id_menu: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references : {
          model: "menu",
          key: "id_menu"
        }
      },
      harga: {
        type: Sequelize.INTEGER(11),
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_transaksi');
  }
};