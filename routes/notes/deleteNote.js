const mongoose = require("mongoose");

const deleteNote = async (req, res) => {
  try {
    console.log("req.body in deleteNote:", req.body);
    const dbResponse = await mongoose
      .model("notes")
      .deleteOne({ _id: req.body.id });

    res.send(dbResponse);
  } catch (error) {
    console.error("delteNote error: ", error);

    res.send({ message: "error in deleteNote" });
  }
};

module.exports = deleteNote;
