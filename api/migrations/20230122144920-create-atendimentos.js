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
        type: Sequelize.DATE,
        allowNull: false,
      },
      fim: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Aguardando', 'Em atendimento', 'Finalizado'],
        defaultValue: 'Aguardando',
      },
      tempo_total: { // EM MINUTOS
        type: Sequelize.INTEGER
      },
      valor_atendimento: {
        type: Sequelize.FLOAT
      },
      comissao_atendente: {
        type: Sequelize.FLOAT
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id'
        }
      },
      profissional_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Profissionais',
          key: 'id'
        }
      },
      servico_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Servicos',
          key: 'id'
        }
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