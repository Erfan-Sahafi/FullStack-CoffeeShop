const express = require('express')
const authMid = require("../../middlewares/auth");
const isAdminMid = require("../../middlewares/isAdmin");
const commentController = require("../../controllers/v1/comment");

const router = express.Router()

router.route('/').post(authMid,commentController.createComment)
router.route('/:id').delete(authMid,isAdminMid,commentController.removeComment)

router.route('/:id/accept').put(authMid,isAdminMid,commentController.acceptComment)
router.route('/:id/reject').put(authMid,isAdminMid,commentController.rejectComment)

module.exports = router;