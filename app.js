const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(cors());

const users = require("./routes/users");
const notes = require("./routes/notes");

app.use("/users", users);
app.use("/notes", notes);

module.exports = app;
