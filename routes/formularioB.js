const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/formulario',indexController.formularioB); 








module.exports = router;