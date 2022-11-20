const express = require("express");

const UserController = require("../controller/userController");
const router = express.Router();

module.exports = () => {
  router.use(function (req, res, next) {
    console.log('"hello fromusers router');
    next();
  });
  router.get("/users", UserController.getAllUsers);
  router.post("/user/register", UserController.register);
  router.put("/user/:id", UserController.updateOneUser);
  router.delete("/user/:id", UserController.deleteOneUser);

  return router;
};
