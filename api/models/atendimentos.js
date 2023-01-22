'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atendimentos.init({
    inicio: DataTypes.DATE,
    fim: DataTypes.DATE,
    status: DataTypes.ENUM,
    tempo_total: DataTypes.INTEGER,
    valor_atendimento: DataTypes.FLOAT,
    comissao_atendente: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Atendimentos',
  });
  return Atendimentos;
};