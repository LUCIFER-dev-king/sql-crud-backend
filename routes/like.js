const express = require("express");
const { validateToken } = require("../middleware/authMiddelware");
const router = express.Router();
const { Likes } = require("../models");

router.post("/", validateToken, async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  Likes.create({ PostId: PostId, UserId: UserId });
  res.json("like added");
});

module.exports = router;
