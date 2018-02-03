const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

var db = require("./models");

var routes = require("./routes");

//Creates local and deployed paths for the MongoDB database

// Set up promises with mongoose
mongoose.Promise = Promise;

//Creates local and deployed paths for the MongoDB database
mongoose.connect(MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolioDb"
);

app.use(routes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Have request go through routes files


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
