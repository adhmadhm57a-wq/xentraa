const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "ضع_رابط_mongodb_هنا"
);

const StudentSchema = new mongoose.Schema({

  username: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Student = mongoose.model(
  "Student",
  StudentSchema
);

app.post("/register", async (req, res) => {

  const student = new Student(req.body);

  await student.save();

  res.json({
    message: "تم التسجيل"
  });

});

app.get("/students", async (req, res) => {

  const students =
    await Student.find();

  res.json(students);

});

app.listen(5000, () => {

  console.log("Server Running");

});
