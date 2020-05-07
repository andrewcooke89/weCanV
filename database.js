const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/weCanVegan';

mongoose.connect(url);

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function () {
  console.log('connected');
});

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  method: String,
  likes: Number,
  comments: [String]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;