const express = require("express");
const router = express.Router();

const getNotes = require("./getNotes");
const createNote = require("./createNote");
const deleteNote = require("./deleteNote");

router.get("/get-all", getNotes);
router.post("/create-note", createNote);
router.delete("/delete-note", deleteNote);

module.exports = router;
