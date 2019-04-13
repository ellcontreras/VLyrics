"use strict";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const db = require("./database");

const PORT = 3000;

const lyricController = require("./controllers/lyricController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/:name", (req, res) => {
//   db.get("lyrics")
//     .push({
//       id: db.get("lyricsId").value(),
//       songName: "runaway",
//       songLyric: "ascasdc"
//     })
//     .write();

//   db.update("lyricsId", n => n + 1).write();

//   res.send(`Hola ${req.params.name}`);
// });

app.post("/", lyricController.addLyric);

app.listen(PORT, () => console.log(`server running on :${PORT}`));
