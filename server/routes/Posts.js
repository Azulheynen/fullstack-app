const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Posts.findByPk(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;
  try {
    const newPost = await Posts.create(post);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error); // Add this to debug
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
