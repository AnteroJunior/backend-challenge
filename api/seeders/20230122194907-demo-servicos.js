'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Servicos', [
      {
        nome: 'Psicólogo',
        tempo: 30,
        tempo_extra_porc: 5, // Aqui será mais 5% do valor
        valor: 70.00,
        comissao_total: 50, //Aqui será 50% do valor total.
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Consulta básica',
        tempo: 15,
        tempo_extra_porc: 15, // Aqui será mais 15% do valor
        valor: 150.00,
        comissao_total: 70, //Aqui será 50% do valor total.
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Acupuntura',
        tempo: 30,
        tempo_extra_porc: 10, // Aqui será mais 10% do valor
        valor: 80.00,
        comissao_total: 35, //Aqui será 35% do valor total.
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Servicos', null, {});
  }
};
