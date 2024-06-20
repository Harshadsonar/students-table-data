const express = require("express");
const collection = require("./config");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");



app.get("/", async (req, res) => {
  const students = await collection.find({});
  res.render("table", { students });
});

app.post("/table", async (req, res) => {
  const data = {
    roll_no: req.body.roll_number,
    student_name: req.body.student_name,
    grade: req.body.grades,
    sub: req.body.subject,
    score: req.body.scores,
  };

  await collection.create(data);
  res.redirect("/");
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
