'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class device_footprint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  device_footprint.init({
    ip_address: DataTypes.STRING,
    browser: DataTypes.STRING,
    os: DataTypes.STRING,
    location: DataTypes.STRING,
    encription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'device_footprint',
  });
  return device_footprint;
};