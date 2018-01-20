const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 8081;
const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set mongoose to leverage built in Promises && Connect to Mongo DB---------------------------
mongoose.Promise = Promise;

// If deployed, use the deployed database. Otherwise use the local myreps database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/myreps";
mongoose.connect(MONGODB_URI);
mongoose.set('debug', true);

//add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
