const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema ({
    term: {type: String},
    api: {type: String}
})

const Search = mongoose.model("search", searchSchema)

module.exports = Search