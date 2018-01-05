/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM quotes;", function(err, data) {
    if (err) {
      throw err;
    }
  });
});
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
