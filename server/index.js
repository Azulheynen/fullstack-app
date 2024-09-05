const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const puppeteer = require("puppeteer");

app.use(express.json());
app.use(cors());

// Routers

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const singlePostRouter = require("./routes/Posts");
app.use("/posts", postRouter);

app.post("/posts/:id", async (req, res) => {
  const { title, url } = req.body;
  const snippet = await fetchSnippet(url);
  const newArticle = await Article.create({ title, url, snippet });
  res.json(newArticle);
});

db.sequelize.sync().then(() => {
  app.listen(9001, () => {
    console.log("Server running on port 9001");
  });
});
