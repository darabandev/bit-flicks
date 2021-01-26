"use strict";
module.exports = (sequelize, DataTypes) => {
  const MovieList = sequelize.define(
    "MovieList",
    {
      movieId: DataTypes.INTEGER,
      listId: DataTypes.INTEGER,
    },
    {}
  );
  MovieList.associate = function (models) {
    return MovieList;
  };
  return MovieList;
};
