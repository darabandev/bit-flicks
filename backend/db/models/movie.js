"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      imdbId: DataTypes.STRING(25),
    },
    {}
  );
  Movie.associate = function (models) {
    // associations can be defined here
  };
  return Movie;
};
