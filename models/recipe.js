const { Recipe } = require('../database');

exports.addRecipe = (recipeToAdd) => {
  const recipe = new Recipe(recipeToAdd);
  recipe.save((err,recipe) => {
    if (err) return console.error(err);
    console.log('recipe saved!', recipe);
  });
};

exports.getRecipes = async () => {
  const recipeList = await Recipe.find((err, recipes)=> {
    if (err) return console.error(err);
    console.log('got recipes!', recipes);
  });
  return recipeList;
};

exports.updateRecipe = (recipeUpdates) => {

  return new Promise ((res, rej) => {
    //find recipe
    const recipe =  Recipe.findOne({name: recipeUpdates.name}, (err, recipe) => {
      if(err) rej(err);
      // update all properties provided
      for (let key in recipeUpdates){
        if (recipeUpdates.hasOwnProperty(key)) {
          recipe[key] = recipeUpdates[key];
        }
      }
      //save changes and resolve promise
      recipe.save();
      console.log('Recipe Updated: ', recipe);
      res(recipe);
    });
  })
}