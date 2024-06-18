const mongoose = require("mongoose");
const url = "127.0.0.1:27017";
const db = "user";

mongoose
  .connect(`mongodb://${url}/${db}`)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
