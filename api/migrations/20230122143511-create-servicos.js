'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Servicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tempo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tempo_extra_porc: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor: {
        type: Sequelize.FLOAT(5,2),
        allowNull: false
      },
      comissao_total: {
        type: Sequelize.FLOAT(5,2),
        allowNull: false,
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
    await queryInterface.dropTable('Servicos');
  }
};