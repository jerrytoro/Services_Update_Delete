const express = require("express");
const userController = require("./../controllers/userController");
const userRouter = express.Router();
//routes
userRouter
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addUser);
userRouter
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.putUser)
  .delete(userController.deleteUser);

module.exports = userRouter;