import { mongo } from "mongoose";
import { AssertionError } from "assert";

// $(document).ready(function () {

//     $("").on("click", function () {
  
//       $.ajax("/http://www.hispanicallyspeakingnews.com/fetch", {
//         type: "GET"
//       }).then(function (data) {
//         setTimeout(function () {
//           location.reload();  
//         }, 8080);
//       })
//         .catch(err 
//             return "console.log"(err));
//     })


/*Get home page. */
router.get('/', function(req, res){
    res.render('index');
});

router.get('/get-data', function(req, res){

});

router.post('/insert', function(req, res) {
var article= {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
};

mongo.connect(url, function(err, db){
    assert.equal(null, err);
    db.collection('media-data').insert(article, function(results))
assert.equal(null, err);
console.log("Article Inserted";
db.close();
});
});

res.redirect('/');
});

router.post("/update", function(req, res){

});