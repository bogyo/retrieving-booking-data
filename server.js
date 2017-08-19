var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";

app.use(express.static(distDir));

app.get('/*', function (req, res) {
res.sendFile(path.join(distDir,'index.html'));
});

// if i've got booking code
app.get("/api/booking/:id", function(req, res) {
  console.log('something');
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
