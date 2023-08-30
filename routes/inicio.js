const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/',indexController.inicio); 
module.exports = router;