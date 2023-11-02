const express = require("express");
const router = express.Router();

const getUser = require("./getUser");
const createUser = require("./createUser");

router.get("/", getUser);

module.exports = router;
