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
    Movie.hasMany(models.Thought, { foreignKey: "movieId" });
    Movie.belongsToMany(models.MovieList, { foreignKey: "movieId", through: "MovieList", otherKey: "listId" });
  };
  return Movie;
};
