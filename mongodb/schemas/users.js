const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
    noteCount: {
      type: Number,
      default: 0,
    },
    accountCreatedAt: {
      type: Number,
      default: Date.now(),
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model(
  "users",
  usersSchema,
  "users"
);
