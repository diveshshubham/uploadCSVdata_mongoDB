const express = require("express");
const router = express.Router();
const controller = require("../../controller/index").defaultPage;

//homepag routes
let routes = (app) => {
  router.get("/home", controller.homePage);
  app.use(router);
};

module.exports = routes;