const express = require("express");
const asyncHandler = require("express-async-handler");
const axios = require("axios");
const { Movie } = require("../../db/models");
const apiKey = require("../../apiKey.js");
const router = express.Router();

//database does not start off seeded with any movies --

//this function determines if the app should pull movie info
//from the local database (if it already exists), or the 3rd
//party API.  If it pulls from the 3rd party API, it will then
//add the pertinent info to our database to pull from there next time
const checkLocalDbForMovie = async id => {
  const movie = await Movie.findOne({ where: { imdbId: id } });
  return movie !== null ? movie : false;
};

//show info for one specific movie
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const movieExistsInLocalDb = await checkLocalDbForMovie(id);

    if (movieExistsInLocalDb) {
      res.send(movieExistsInLocalDb);
    } else {
      const { data } = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
      const { Title, Year, Poster, Runtime, Genre, Director, Actors, Plot, Country, imdbID, imdbRating } = data;

      const newMovie = await Movie.create({
        title: Title,
        year: Year,
        poster: Poster,
        runtime: Runtime,
        genre: Genre,
        director: Director,
        actors: Actors,
        plot: Plot,
        country: Country,
        imdbId: imdbID,
        imdbRating,
      });

      res.send(newMovie);
    }
  })
);

module.exports = router;
