"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      imdbId: DataTypes.STRING,
      title: DataTypes.STRING,
      year: DataTypes.STRING,
      poster: DataTypes.STRING,
      runtime: DataTypes.STRING,
      genre: DataTypes.STRING,
      director: DataTypes.STRING,
      actors: DataTypes.STRING,
      plot: DataTypes.STRING,
      country: DataTypes.STRING,
      imdbRating: DataTypes.STRING,
    },
    {}
  );
  Movie.associate = function (models) {
    Movie.hasMany(models.Thought, { foreignKey: "movieId" });
    Movie.belongsToMany(models.List, { foreignKey: "movieId", through: "MovieList", otherKey: "listId" });
  };
  return Movie;
};
