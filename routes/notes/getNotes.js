const mongoose = require("mongoose");

const getNotes = async (req, res) => {
  try {
    console.log("req.body in getNotes:", req.body);
    const dbResponse = await mongoose
      .model("notes")
      .find({ user: req.body.user });

    res.send(dbResponse);
  } catch (error) {
    res.send(error);
  }
};

module.exports = getNotes;
