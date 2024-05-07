const express = require("express");
const authController = require("../../controllers/v1/auth");
const authMid = require('../../middlewares/auth')

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authMid,authController.getMe);

module.exports = router;
