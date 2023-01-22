'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Servicos.hasMany(models.Atendimentos, {
        foreignKey: 'servico_id'
      });
    }
  }
  Servicos.init({
    nome: DataTypes.STRING,
    tempo: DataTypes.INTEGER,
    tempo_extra_porc: DataTypes.INTEGER,
    comissao_total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};