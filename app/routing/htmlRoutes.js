module.exports = function(app, path) {


    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };