// Dependencies
var express = require('express');
var app = express();
var cheerio = require ('cheerio');
var axios = require ('axios');
var mongoose = require ('mongoose');
var express_handlebars  = require ('express-handlebars');
var path = require("path");
require('dotenv').config()


var port = process.env.PORT || 8080;  //could use 3000, 5000, these are open ports
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

var article = {};
article.headline = headline;
article.summary = summary;
article.url = url;
article.img = data.img;
article.time = new Date().getTime();
var collection = db.collection('hispanicallyMedia');

collection.insert(artical function (err, result) {
	console.log("inserted", article.link);

	collection.findOne({link: article.link}, function (err, article) {
		pub.publish("article:inserted", JSON.stringify(article));
	});

});

}).onError(function (err) {
console.log(err);
});
};


// For serving of static CSS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
// require("./app/routing/apiRoutes.js")(app);  
require("./app/routing/htmlRoutes.js")(app, path);

app.listen(port, function() {
	console.log("App listening on port: " + port);
});
