const recipeModel = require('../models/recipe');

exports.addRecipe = async (req, res) => {
  try {
    console.log(req.body);
    await recipeModel.addRecipe(req.body);
    res.status(201);
    res.send(req.body);
  } catch (err) {
    res.send(err);
    res.status = 500;
  }
}

exports.getRecipes = async (req,res) => {
  try {
    const recipeList = await recipeModel.getRecipes();
    res.status = 200;
    res.send(recipeList);
  } catch (err) {
    res.send(err);
    res.status = 500;
  }
}

exports.updateRecipe = async (req,res) => {
  try {
    const updatedRecipe = await recipeModel.updateRecipe(req.body);
    res.status = 204;
    res.send(updatedRecipe)
  } catch (err) {
    res.send(err);
    res.status = 500;
  }
}