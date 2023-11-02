const mongoose = require("mongoose");

const createNote = async (req, res) => {
  try {
    console.log("req.body in createNote:", req.body);
    const dbResponse = await mongoose
      .model("notes")
      .create(req.body);

    res.send(dbResponse);
  } catch (error) {
    res.send(error);
  }
};

module.exports = createNote;
