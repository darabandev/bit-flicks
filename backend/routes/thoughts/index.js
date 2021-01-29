const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Thought, Movie } = require("../../db/models");

//show all thoughts on a movie
router.get(
  "/:imdbId",
  asyncHandler(async (req, res) => {
    const { imdbId } = req.params;

    const thoughts = await Thought.findAll({ where: { imdbId } });
    res.json(thoughts);
  })
);

//create new thought on a specific movie
router.post(
  "/new/:imdbId",
  asyncHandler(async (req, res) => {
    const { userId, review } = req.body;
    const { imdbId } = req.params;
    const movie = await Movie.findOne({ where: { imdbId } });
    const movieId = movie.id;

    await Thought.create({ userId, movieId, review });

    const thoughts = await Thought.findAll({ where: { movieId } });
    res.json(thoughts);
  })
);

module.exports = router;
