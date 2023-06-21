
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {

    name: {
        type: DataTypes.STRING,
      },    
    ingredients: {
        type: DataTypes.STRING,
      },
      recipieId:{
    type: DataTypes.INTEGER,
      }
  });      
   
  return Ingredient;
};