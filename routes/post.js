const express = require("express");
const router = express.Router();
const { Posts, Likes } = require("../models");

router.get("/", async (req, res) => {
  const listofPosts = await Posts.findAll();
  return res.json(listofPosts);
});

router.post("/set", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

module.exports = router;
