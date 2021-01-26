"use strict";
module.exports = (sequelize, DataTypes) => {
  const Thought = sequelize.define(
    "Thought",
    {
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      review: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 300],
        },
      },
    },
    {}
  );
  Thought.associate = function (models) {
    // associations can be defined here
  };
  return Thought;
};
