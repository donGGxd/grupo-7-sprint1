const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');




router.get('/a',indexController.formularioA); 








module.exports = router;