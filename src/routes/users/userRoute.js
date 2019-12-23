/**
 * Visit API
 *
 */

const express = require("express");
const router = express.Router();
const UserController = require("./UserController");
const User = new UserController();

router.get('/', User.getUser, User.getUserDetail);

module.exports = router;
