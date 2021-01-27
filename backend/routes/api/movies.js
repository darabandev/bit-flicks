const express = require("express");
const asyncHandler = require("express-async-handler");
const axios = require("axios");
const { Movie } = require("../../db/models");
const apiKey = require("../../apiKey");
const router = express.Router();

router.get(
  "/:imdbId",
  asyncHandler(async (req, res) => {
    const { imdbId } = req.params;

    const { data } = await axios.get(`http://www.omdbapi.com/?i=${imdbId}&apikey=402b57d7`);
    res.send(data);
  })
);

module.exports = router;
