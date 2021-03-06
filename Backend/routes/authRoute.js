const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.signUp);

router.post('/login', authController.postLogin);

router.post('/logout', authController.logOut);

router.get('/get-session', authController.getSession);

module.exports = router;
