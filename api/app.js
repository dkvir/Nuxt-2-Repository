const express = require("express");

// Create express instance
const app = express();

// Middleware API
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Globals
global.__basedir = __dirname;

// Routes
const Routes = require("./routes");
app.use(Routes);

module.exports = app;
