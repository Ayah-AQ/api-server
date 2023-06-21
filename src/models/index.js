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
  const food = require('./Food')
  const recipe = require('./Recipe')
  const ingredient = require('./Ingredient')
  const Collection = require('./lib/collection')


  const foodModel = food(sequelize, DataTypes);
  const clothesModel = clothes(sequelize, DataTypes);
  const recipeModel = recipe(sequelize, DataTypes);
  const ingredientModel = ingredient(sequelize, DataTypes);
  
  recipeModel.hasMany(ingredientModel, {foreignKey: 'recipieId', sourceKey: 'id'});

  // targetKey -> the target model PK
  ingredientModel.belongsTo(recipeModel, {foreignKey: 'recipieId', targetKey: 'id'})

const foodCollection = new Collection(foodModel);
const clothesCollection = new Collection(clothesModel);
const recipeCollection = new Collection(recipeModel);
const ingredientCollection = new Collection(ingredientModel);



  module.exports = {
   db: sequelize,
   Clothes: clothes(sequelize,DataTypes),
   Food: food(sequelize,DataTypes),
   foodCollection,
   clothesCollection,  
   recipeCollection,
   ingredientCollection
  }