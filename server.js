const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();

// STATIC ASSETS (served to Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//MIDDLEWARE PASSPORT STRATEGIES
app.use(passport.initialize());
const localRegisterStrategy = require("./passport/local-register");
const localLoginStrategy = require("./passport/local-login");
passport.use("local-register", localRegisterStrategy);
passport.use("local-login", localLoginStrategy);
const authCheckMiddleware = require("./middleware/auth-check");
app.use("/user", authCheckMiddleware);

//BODYPARSER
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//DATABASE
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/myreps");


//ROUTES
const routes = require("./routes");
app.use(routes);
// Send every request to the React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//START SERVER
const PORT = 8081; //process.env.PORT ||
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
