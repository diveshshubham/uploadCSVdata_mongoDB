const express = require("express");
const router = express.Router();
const controller = require("../../controller/index").uploadController;

//data upload routes
let routes = (app) => {
  router.post("/uploadDataCSV", controller.upload);
  app.use(router);
};

module.exports = routes;