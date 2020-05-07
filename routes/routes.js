const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', (req,res) => {
  res.send('hello');
});
router.get('/getRecipes', recipeController.getRecipes);
router.post('/addRecipe', recipeController.addRecipe);
router.put('/updateRecipe', recipeController.updateRecipe);
router.get('*', (req,res) => {
  res.send('404: Page not found :(') ;
});

module.exports = router;