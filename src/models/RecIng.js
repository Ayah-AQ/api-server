const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');

module.exports = (sequelize, DataTypes) => {
  const RecipeIngredients = sequelize.define('RecipeIngredient');
  return RecipeIngredients;
};