const express = require("express");
const router = express.Router();

const users = require('./../controllers/users');

router.route('/').post(users.createProfile);
router.route('/:id').get(users.getProfileById);

module.exports = router;