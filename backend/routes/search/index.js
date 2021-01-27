const axios = require("axios");
const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const apiKey = require("../../apiKey");

router.get(
  "/:searchTerm",
  asyncHandler(async (req, res) => {
    const { searchTerm } = req.params;
    const parsedSearch = searchTerm.replace(" ", "+");

    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${parsedSearch}&type=movie`);
    res.send(data);
  })
);

module.exports = router;
