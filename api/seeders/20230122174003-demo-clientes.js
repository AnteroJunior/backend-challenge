'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Clientes', [
      {
        nome: 'Mesha Tech',
        email: 'mesha@mesha.com',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Thais',
        email: 'thais@mesha.com',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Miller',
        email: 'miller@mesha.com',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
