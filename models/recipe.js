const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  publisher: [{type: String, required: true}],
  image: {type: String, trim: true},
  link: {type: String, trim: true},
  rank: String,
  date: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;