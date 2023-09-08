const connectToDB = require('./config/db'); 
require("dotenv").config();


const express = require("express");

const app = express();
// Initialising connection to DB
connectToDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;