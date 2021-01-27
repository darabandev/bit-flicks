"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imdbId: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year: {
        type: Sequelize.STRING,
      },
      poster: {
        type: Sequelize.STRING,
      },
      runtime: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      director: {
        type: Sequelize.STRING,
      },
      actors: {
        type: Sequelize.STRING,
      },
      plot: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      imdbRating: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Movies");
  },
};
