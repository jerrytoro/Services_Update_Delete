const express = require("express");
const userController = require("./../controllers/userController");
const userRouter = express.Router();
//routes
userRouter
  .route("/")
  //.get(productController.getAllProducts)
  .post(userController.addUser);
//userRouter
  //.route("/:id")
  //.get(productController.getProductById)
  //.put(productController.putProduct)
  //.delete(productController.deleteProduct);

module.exports = userRouter;