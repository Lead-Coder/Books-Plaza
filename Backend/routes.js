const express = require('express');
const { signup, login } = require('./controller.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/', login);

module.exports = router;

