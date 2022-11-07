const express = require("express");
const router = express.Router();
const controller = require("../../controller/index");

//poicy detail by id route
let userPolicydetals = (app) => {
  router.get("/userPolicyDetailsById/:userId", controller.userController.policyByUserId);
  app.use(router);
};

module.exports = userPolicydetals;