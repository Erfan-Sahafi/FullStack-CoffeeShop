const express = require('express')
const authMid = require("../../middlewares/auth");
const isAdminMid = require("../../middlewares/isAdmin");
const commentController = require("../../controllers/v1/comment");

const router = express.Router()

router.route('/').post(authMid,commentController.createComment)

module.exports = router;