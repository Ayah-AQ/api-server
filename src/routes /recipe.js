'use strict';

const express = require('express'); 
const { Recipie, ingredientCollection } = require('../models');
const router = express.Router();
const { recipeCollection } = require('../models/index')

router.get('/recipie', getRecipie);
router.get('/recipie/:id', getOneRecipie);
router.put('/recipie/:id', updateRecipie);
router.delete('/recipie/:id', deleteRecipie);
router.post('/recipie', createRecipie);
router.get('/RecipieIng/:id', RecipieIng);


async function getRecipie(req, res) {
  // const allRecipe = await Recipie.findAll();
  const allRecipe = await recipeCollection.read();
  res.status(200).json(allRecipe);
}

async function getOneRecipie(req, res) {
  const id = req.params.id;
  // const recipie = await Recipie.findOne({ where: { id: id } });
  const recipie = await recipeCollection.read(id);

  res.status(200).json(recipie)
}

async function updateRecipie(req, res) {
  const id = req.params.id;
  const obj = req.body;
  // const person = await People.findOne({where: { id }});
  // const updatedPerson = await person.update(obj)

  const updatedRecipie = await recipeCollection.update(id, obj)

  res.status(202).json(updatedRecipie);

}

async function deleteRecipie(req, res) {
  const id = req.params.id;
  const deletedRecipie = await recipeCollection.delete(id);
  res.status(204).json(deletedRecipie);
}

async function createRecipie(req, res) {
  const obj = req.body;
  // const recipie = await Recipie.create(obj);
  const recipie = await recipeCollection.create(obj)
  res.status(201).json(recipie)
}

async function RecipieIng(req, res) {
  const id = req.params.id;
  const RecipieIngById = await recipeCollection.readRecipieIng(id, ingredientCollection.model);
  res.status(200).json(RecipieIngById)
}


module.exports = router;