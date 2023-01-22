'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atendimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inicio: {
        type: Sequelize.DATE
      },
      fim: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM
      },
      tempo_total: {
        type: Sequelize.INTEGER
      },
      valor_atendimento: {
        type: Sequelize.FLOAT
      },
      comissao_atendente: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Atendimentos');
  }
};