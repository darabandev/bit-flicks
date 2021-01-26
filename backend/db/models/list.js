"use strict";
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    "List",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 50],
        },
      },
      userId: DataTypes.INTEGER,
    },
    {}
  );
  List.associate = function (models) {
    List.belongsTo(models.User, { foreignKey: "userId" });
    List.belongsToMany(models.MovieList, { foreignKey: "listId", through: "MovieList", otherKey: "movieId" });
  };
  return List;
};
