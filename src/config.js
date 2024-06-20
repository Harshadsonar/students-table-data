// config.js
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/table");

connect.then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Database connection failed:", error));

const tableSchema = new mongoose.Schema({
  roll_no: { type: Number, required: true },
  student_name: { type: String, required: true },
  grade: { type: Number, required: true },
  sub: { type: String, required: true },
  score: { type: Number, },
});

const collection = mongoose.model("Table", tableSchema);

module.exports = collection;
