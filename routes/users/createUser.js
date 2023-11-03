const mongoose = require("mongoose");

const createUser = async (req, res) => {
  try {
    console.log("req.body in createUser: ", req.body);
    const dbResponse = await mongoose
      .model("users")
      .create({
        email: req.body.email,
        accountCreatedAt: Date.now(),
      });

    res.send(dbResponse);
  } catch (error) {
    res.send(error);
  }
};

module.exports = createUser;
