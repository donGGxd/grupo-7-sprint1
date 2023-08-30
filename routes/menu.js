const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');




router.get('/hamburguesa',indexController.menu); 





module.exports = router;