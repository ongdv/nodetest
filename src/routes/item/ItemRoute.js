/**
 * Visit API
 *
 */

const express = require("express");
const router = express.Router();
const ItemController = require("./ItemController");
const Item = new ItemController();

router.get('/', Item.getItem);

module.exports = router;
