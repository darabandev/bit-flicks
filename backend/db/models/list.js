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
    // associations can be defined here
  };
  return List;
};
