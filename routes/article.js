var express = require("express");
var router = express.Router();


var articleController = require("../controllers/articleController");

router.post("/articles",  articleController.addArticle);

router.get("/articles",articleController.getArticle)

module.exports = router;
