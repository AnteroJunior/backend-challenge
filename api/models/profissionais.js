'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profissionais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profissionais.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    total_comissao: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Profissionais',
  });
  return Profissionais;
};