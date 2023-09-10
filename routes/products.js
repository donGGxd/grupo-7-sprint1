const express = require('express');
const router = express.Router();
const productsController= require('../controllers/productsControllers');


//lista de producto
router.get('/products',productsController.index);
//crear producto



//eliminar producto



//






module.exports = router;
