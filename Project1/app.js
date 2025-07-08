const express = require("express");
const connectToDb = require("./src/db/db");
const dotenv = require("dotenv");
const noteModel = require("./src/models/note.model");
dotenv.config();
// server will connect to DB in this file only
connectToDb(); //database connection

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Welcome to Notes App");
});

app.get("/notes", async (req, res) => {
  const allNotes = await noteModel.find();
  res.send({
    message: "Here are all the notes!!",
    allNotes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const { title } = req.body;
  const id = req.params.id;

  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      title: title,
    }
  );
  res.json({
    message: "Note updated successfully!!",
  });
});
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  console.log(title, description);

  const newNote = await noteModel.create({
    title: title,
    description: description,
  });

  res.json({
    message: "Data recieved",
    title: title,
    description: description,
  });
});
app.listen(3000, () => {
  console.log("Server is running on 3000");
});
