const express = require("express");
const usersController = require("../../controllers/v1/user");

const router = express.Router();

router.route('/ban/:id').post(usersController.banUser);


module.exports = router;