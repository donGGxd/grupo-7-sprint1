const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');




router.post('/usuario',indexController.usuario);

module.exports = router;