const express = require('express');
const router = express.Router();
const productsController= require('../controllers/productsControllers');

// creacion y edicion de productos
router.get('/vender',productsController.vender); 

//lista de producto
router.get('/',productsController.index);

//crear producto



//eliminar producto



//






module.exports = router;
