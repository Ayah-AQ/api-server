'use strict';

const express = require('express');
const { ingredientCollection } = require('../models');
const router = express.Router();

router.get('/ingredient', getIngredient);
router.get('/ingredient/:id', getOneIngredient);
router.put('/ingredient/:id', updateIngredient);
router.delete('/ingredient/:id', deleteIngredient);
router.post('/ingredient', createIngredient);


async function getIngredient(req, res) {
  const allIngredient = await ingredientCollection.read();
  res.status(200).json(allIngredient);
}

async function getOneIngredient(req, res) {
  const id = req.params.id;
  const ingredient = await ingredientCollection.read(id);
  res.status(200).json(ingredient)
}

async function updateIngredient(req, res) {
  const id = req.params.id;
  const obj = req.body;
  // const person = await People.findOne({where: { id }});
  // const updatedPerson = await person.update(obj)

  const updatedIngredient = await ingredientCollection.update(id, obj)

  res.status(202).json(updatedIngredient);

}

async function deleteIngredient(req, res) {
  const id = req.params.id;
  const deletedIngredient = await ingredientCollection.delete(id);
  res.status(204).json(deletedIngredient);
}

async function createIngredient(req, res) {
  const obj = req.body;
  const ingredient = await ingredientCollection.create(obj);
  res.status(201).json(ingredient)
}

module.exports = router;