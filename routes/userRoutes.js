const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const userRouter = express.Router();
//routes
userRouter
  .route("/")
  .post(userController.addUser)
  .all(authController.protect).get(userController.getAllUsers);
userRouter
  .route("/:id")
  .all(authController.protect)
  .get(userController.getUserById)
  .put(userController.putUser)
  .delete(userController.deleteUser);

module.exports = userRouter;