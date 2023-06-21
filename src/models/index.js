'use strict'

const { Sequelize, DataTypes } = require("sequelize");

const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' :  process.env.DB_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  } : {}

  let sequelize = new Sequelize(DB_URL, sequelizeOptions); 

  const clothes = require('./clothes')
  const food = require('./food')

  module.exports = {
   db: sequelize,
   Clothes: clothes(sequelize,DataTypes),
   Food: food(sequelize,DataTypes)
  }