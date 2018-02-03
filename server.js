const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

var db = require("./models");

var routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Creates local and deployed paths for the MongoDB database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolioDb";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
