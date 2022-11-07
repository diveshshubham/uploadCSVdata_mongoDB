const express = require("express");
const router = express.Router();
const controller = require("../../controller/index");

//search routes
let searchRoutes = (app) => {
  router.get("/searchUser", controller.userController.userSearch);
  app.use(router);
};

module.exports = searchRoutes;