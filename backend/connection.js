const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_USER, () => {
  console.log("connected to mongodb");
});
