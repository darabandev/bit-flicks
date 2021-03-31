const { response } = require("express");
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User, List, Movie, MovieList } = require("../../db/models");

//show all lists for a user
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const lists = await List.findAll({ where: { userId }, include: { model: Movie }, order: [["createdAt", "ASC"]] });
    res.json(lists);
  })
);

//shows one specific list
router.get(
  "/single/:listId",
  asyncHandler(async (req, res) => {
    const { listId } = req.params;
    const list = await List.findByPk(listId, { include: { model: Movie } });
    res.json(list);
  })
);

//create new list
router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const { name, userId } = req.body;

    await List.create({ name, userId });

    const lists = await List.findAll({ where: { userId }, include: { model: Movie }, order: [["createdAt", "ASC"]] });
    res.json(lists);
  })
);

//edit existing list - basically used for renaming
router.put(
  "/edit/:listId",
  asyncHandler(async (req, res) => {
    const { listId } = req.params;
    const { name, userId } = req.body;

    const list = await List.findByPk(listId);
    if (name) list.name = name;

    await list.save();

    const lists = await List.findAll({ where: { userId }, include: { model: Movie }, order: [["createdAt", "ASC"]] });
    res.json(lists);
  })
);

//delete list
router.delete(
  "/:userId/:listId",
  asyncHandler(async (req, res) => {
    const { listId, userId } = req.params;

    await MovieList.destroy({ where: { listId } });
    await List.destroy({ where: { id: listId } });

    const lists = await List.findAll({ where: { userId }, include: { model: Movie }, order: [["createdAt", "ASC"]] });
    res.json(lists);
  })
);

// add a specific movie to a specific list
router.post(
  "/:userId/:listId/:imdbId",
  asyncHandler(async (req, res) => {
    const { userId, listId, imdbId } = req.params;

    const movie = await Movie.findOne({ where: { imdbId } });

    await MovieList.create({ listId, movieId: movie.id });

    const lists = await List.findAll({ where: { userId }, include: { model: Movie }, order: [["createdAt", "ASC"]] });
    res.json(lists);
  })
);

//remove specific movie from specific list
router.delete(
  "/delete/:userId/:listId/:imdbId",
  asyncHandler(async (req, res) => {
    const { userId, listId, imdbId } = req.params;

    const movie = await Movie.findOne({ where: { imdbId } });

    await MovieList.destroy({ where: { listId, movieId: movie.id } });

    const lists = await List.findAll({ where: { userId }, include: { model: Movie }, order: [["createdAt", "ASC"]] });
    res.json(lists);
  })
);

module.exports = router;
