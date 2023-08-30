const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/vender',indexController.vender); 













module.exports = router;