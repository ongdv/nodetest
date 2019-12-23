/**
 *
 */

/** Routes */
const usersRouter = require("./users");
const itemRouter = require('./item');



const getRouter = (path, controller) => ({ path, controller });

const routes = [
  getRouter("/users", usersRouter),
  getRouter("/items", itemRouter),
  getRouter("/*", (req, res) => {
    res.send({
      status: 404,
      message: "Empty API"
    });
  })
];

module.exports = routes;
