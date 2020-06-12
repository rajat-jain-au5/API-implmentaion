var Article = require("../Model/Article");
var jwtDecode = require("jwt-decode");
articleController = {};

articleController.addArticle = async (req, res) => {
  try {
    const { title, body, access_token } = req.body;
    var decoded = jwtDecode(access_token);
    var article = { 
          title, 
          body,
          author:decoded.username,
          uid:decoded.id  };
    const articles = new Article(article);
    articles.save();
    res.status(201).json({
      message: "new article created"
    });
  } catch (err) {
    res.status(400).send(err);
  }
};


articleController.getArticle= async(req,res)=>{
  try{
    let page = req.query.page;
    const articles = await Article.find({}).sort('author')
      .skip((page - 1) * 3)
      .limit(3);
res.status(200).json({ data: articles });
  }
  catch(err){
     res.status(400).send(err);
  }
   
}
module.exports = articleController;


