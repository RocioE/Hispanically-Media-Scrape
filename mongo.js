var dburl = 'localhost/mongoapp';
var collections = [articles];
var db =require (mongojs).connect(dburl, collections);

function article(title, content, author){
    this.title = title;
    this.content= content;
    this.author= author;
}