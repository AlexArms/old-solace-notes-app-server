const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connect() {
  try {
    const client = await mongoose.connect(
      process.env.MONGODB_URI
    );
    console.log("mongodb connected successfully");
  } catch (error) {
    console.error("mongoose connection error: ", error);
  }
}
connect().catch(console.dir);

require("./schemas/notes");
require("./schemas/users");
