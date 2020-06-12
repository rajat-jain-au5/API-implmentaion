const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var User = require('./User')
const ArticleSchema = new Schema({
  title: { type: String },
  body: { type: String },
  author: { type: String },
});

const Articles = mongoose.model("article", ArticleSchema);

module.exports = Articles;
