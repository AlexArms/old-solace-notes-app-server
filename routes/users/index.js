const express = require("express");
const router = express.Router();

const getUser = require("./getUser");
const createUser = require("./createUser");

router.get("/get-user", getUser);
router.post("/create-user", createUser);

module.exports = router;
