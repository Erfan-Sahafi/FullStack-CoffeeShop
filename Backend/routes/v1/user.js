const express = require("express");
const usersController = require("../../controllers/v1/user");
const authMid = require('../../middlewares/auth')
const isAdminMid = require('../../middlewares/isAdmin')
const router = express.Router();

router
    .route('/')
    .get(authMid,isAdminMid,usersController.getAll)
    .put(authMid,usersController.updateUser)
router.route('/role').put(authMid,isAdminMid,usersController.changeUserRole)
router.route('/:id').delete(authMid,isAdminMid,usersController.removeUser)
router.route('/ban/:id').post(authMid ,isAdminMid ,usersController.banUser);


module.exports = router;