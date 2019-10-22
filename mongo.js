var dburl = 'localhost/mongoapp';
var collections = [articles];
var db =require (mongojs).connect(dburl, collections);

function article(title, content, author){
    this.title = title;
    this.content= content;
    this.author= author;
}

var article1 = new article("title", "content", "author");

db.article.save(article1, function(err, savedArticle){
    if( err savedArticle) console.log("article " + err);
    else console.log("Article + savedArticle + saved");
});