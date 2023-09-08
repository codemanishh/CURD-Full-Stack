const connectToDB = require('./config/db'); 
const userRoutes = require("./routes/userRoutes");


require("dotenv").config();


const express = require("express");

const app = express();
// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Initialising connection to DB
connectToDB();
app.use("/", userRoutes);

module.exports = app;