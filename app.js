const express = require('express')
const db = require("./app/models/index.js");
const app = express()

db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));
module.exports = app;