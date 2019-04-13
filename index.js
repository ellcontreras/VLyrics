const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const PORT = 3000;

const lyricController = require("./controllers/lyricController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/lyric", lyricController.addLyric);
app.get("/lyric/:id", lyricController.getOne);
app.put("/lyric/:id", lyricController.updateOne);
app.delete("/lyric/:id", lyricController.removeOne);

app.listen(PORT, () => console.log(`server running on :${PORT}`));
