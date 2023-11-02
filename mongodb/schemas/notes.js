const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    createdAt: {
      type: Number,
      default: Date.now(),
    },
    user: {
      type: String,
      default: null,
      required: true,
    },
  },
  { collection: "notes" }
);

module.exports = mongoose.model(
  "notes",
  notesSchema,
  "notes"
);
