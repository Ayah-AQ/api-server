// containing the schema for the clothes table
'use strict'


const clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING
  },
  FabricName: {
    type: DataTypes.STRING
  },
  description:{
    type: DataTypes.STRING
  }
})

module.exports = clothes;