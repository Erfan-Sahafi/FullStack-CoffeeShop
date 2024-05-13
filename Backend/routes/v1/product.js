const express = require("express");
const productController = require("../../controllers/v1/product");
const authMid = require("../../middlewares/auth");
const isAdminMid = require("../../middlewares/isAdmin");
const multer = require("multer");
const multerStorage = require("../../utils/uploader");
const router = express.Router();

router
  .route("/")
  .get(productController.getAll)
  .post(
    multer({ storage: multerStorage, limits: { fileSize: 100000000 } }).single(
      "cover"
    ),
    authMid,
    isAdminMid,
    productController.createProduct
  );
router.route("/:href").get(productController.getOne);
router
  .route("/:id")
  .delete(authMid, isAdminMid, productController.removeProduct)
  .put(
    multer({ storage: multerStorage, limits: { fileSize: 100000000 } }).single(
      "cover"
    ),
    authMid,
    isAdminMid,
    productController.updateProduct
  );

module.exports = router;
