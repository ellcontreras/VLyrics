const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const PORT = 3000;

const lyricController = require("./controllers/lyricController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/lyric", lyricController.getAll);
app.post("/lyric", lyricController.addLyric);
app.get("/lyric/:id", lyricController.getOne);
app.put("/lyric/:id", lyricController.updateOne);
app.delete("/lyric/:id", lyricController.removeOne);
app.get("/lyric/search/:query", lyricController.search);

app.listen(PORT, () => console.log(`server running on :${PORT}`));
