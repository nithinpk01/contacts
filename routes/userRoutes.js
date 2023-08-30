const express = require("express");
const router = express.Router();
const { getUsers, registerUser, loginUser } = require("../controllers/userController");
const validateToken = require("../middleware/authentication");

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/',validateToken, getUsers);
module.exports = router;