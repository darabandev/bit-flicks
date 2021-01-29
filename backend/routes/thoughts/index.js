const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Thought } = require("../../db/models");

//show all thoughts on a movie
router.get(
  "/:movieId",
  asyncHandler(async (req, res) => {
    const { movieId } = req.params;

    const thoughts = await Thought.findAll({ where: { movieId } });
    res.json(thoughts);
  })
);

//create new thought on a specific movie
router.post(
  "/new/:movieId",
  asyncHandler(async (req, res) => {
    const { userId, review } = req.body;
    const { movieId } = req.params;

    await Thought.create({ userId, movieId, review });

    const thoughts = await Thought.findAll({ where: { movieId } });
    res.json(thoughts);
  })
);

module.exports = router;
