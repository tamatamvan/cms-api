const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/* GET users listing. */
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
