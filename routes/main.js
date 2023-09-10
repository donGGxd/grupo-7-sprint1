const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
/* const indexController = require('../controllers/indexController'); */

router.get('/',indexController.inicio); 

router.get('/hamburguesa',indexController.menu); 

router.get('/login',indexController.login); 

router.get('/registro',indexController.registro); 





module.exports = router;