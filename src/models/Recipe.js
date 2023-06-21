module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {

    name: { type: DataTypes.STRING},
    recipie: { type: DataTypes.STRING},

  });
  return Recipe;
};