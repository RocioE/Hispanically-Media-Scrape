// Dependencies
var express = require('express');
var app = express();
var cheerio = require ('cheerio');
var axios = require ('axios');
var mongoose = require ('mongoose');
var express_handlebars  = require ('express-handlebars');
var path = require("path");
require('dotenv').config()

// Database config.
var databaseUrl = "scraper";
var collections = ["dataScraped"];

var port = process.env.PORT || 8080;  //could use 3000, 5000, these are open ports
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";


// mongojs config connects to db var, rtns db error
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});


//scrapes results from db and returns it//
app.get("/", function(req, res) {
	res.send("Latino World Media");
  });
  
  // Returning 'all' db//clue is FUNCTION, gets req and gives out the results, follow pattern steps//
  app.get("/all", function(req, res) {
	db.dataScraped.find({}, function(error, found) {
	  // Throw any errors to the console
	  if (error) {
		console.log(error);
	  }
	  // If there are no errors, sends db to the browser as json
	  else {
		res.json(found);
	  }
	});
  });

  // Scraping data from Hispanically Speaking News then adds it to mongodb db jquery!
app.get("/scrape", function(req, res) {
	// axio makes req from Hispanically Speaking News. Using Cheerio to html text using Axios req
	axios.get("http://www.hispanicallyspeakingnews.com").then(function(response) {
	//loading, Using Cheerio to load html text using axios req.
	var $ = cheerio.load(response.data);
	  //loads all element with a "title" class using 'children'
	  $(".title").each(function(i, element) {
		var title = $(element).children("a").text();
		var link = $(element).children("a").attr("href");
  
// use if/else for when it finds both titel and link, it will then insert it into db//
if (title && link) {
	db.scrapedData.insert({
	  title: title,
	  link: link
	},
	//if both are not found, it will rtn error
	function(err, inserted) {
	  if (err) {
		console.log(err);
	  }
	  else {
		console.log(inserted);
	  }
	});
  }
});
});

// Sends 'Scrape is Done!' msg to browser//
res.send("Scrape is Done!");
});



// For serving of static CSS/ this is totally correct!//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
// require("./app/routing/apiRoutes.js")(app);  
require("./app/routing/htmlRoutes.js")(app, path);

app.listen(port, function() {
	console.log("App listening on port: " + port);
});
