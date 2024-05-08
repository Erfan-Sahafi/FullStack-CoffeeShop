const express = require("express");
const productController = require("../../controllers/v1/product");
const authMid = require("../../middlewares/auth");
const isAdminMid = require("../../middlewares/isAdmin");
const router = express.Router();

router
  .route("/")
  .get(productController.getAll)
  .post(authMid, isAdminMid, productController.createProduct);
router
  .route("/:id")
  .delete(authMid, isAdminMid, productController.createProduct)
  .patch(authMid, isAdminMid, productController.createProduct);

module.exports = router;