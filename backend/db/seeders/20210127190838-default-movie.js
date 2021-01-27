"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Star Wars: Episode IV - A New Hope",
          imdbId: "tt0076759",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          year: "1977",
          runtime: "121 min",
          genre: "Action, Adventure, Fantasy, Sci-Fi",
          director: "George Lucas",
          actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
          plot:
            "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
          country: "USA",
          imdbRating: "8.6",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movies", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },
};
