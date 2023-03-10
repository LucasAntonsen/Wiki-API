//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://0.0.0.0:27017/wikiDB");

const articleSchema = new mongoose.Schema ({
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);

//Requests targeting all articles

app.route("/articles")

.get( (req, res) => {
  Article.find( (err, foundArticles) => {
    if(!err){
      res.send(foundArticles);
    }else{
      res.send(err)
    }
  })
})

.post( (req, res) => {
  const newArticle = new Article ({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save( (err) => {
    if(!err){
      res.send("Successfully added a new article.");
    }else{
      res.send(err);
    }
  })
})

.delete( (req, res) => {
  Article.deleteMany( (err) => {
    if(!err){
      res.send("Successfully deleted all articles.");
    }else{
      res.send(err);
    }
  })
});

//requests targeting specific article

app.route("/articles/:articleTitle")

.get( (req, res) => {
  Article.findOne({title: req.params.articleTitle}, (err, foundArticle) => {
    if(!err){
      res.send(foundArticle);
    }else{
      res.send(err);
    }
  })
})

.put( (req, res) => {
  Article.replaceOne(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    (err) => {
      if(!err){
        res.send("Successfully updated the content of the selected article.");
      }else{
        res.send(err);
      }
    });
})

.patch( (req, res) => {
  Article.updateOne(
    {title: req.params.articleTitle},
    req.body,
    (err) => {
      if(!err){
        res.send("Successfully updated the content of the selected article.");
      }else{
        res.send(err);
      }
    });
})

.delete( (req, res) => {
  Article.deleteOne({title: req.params.articleTitle},
  (err) => {
    if(!err){
      res.send("Successfully deleted the selected article.");
    }else{
      res.send(err);
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
