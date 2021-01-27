const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { List } = require("../../db/models");

router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const lists = await List.findAll({ where: { userId } });
    res.json(lists);
  })
);

module.exports = router;
