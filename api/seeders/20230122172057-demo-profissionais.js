'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Profissionais', [
      {
        nome: 'John Doe',
        email: 'john@john.com',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Antero',
        email: 'antero@antero.com',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profissionais', null, {});
  }
};
