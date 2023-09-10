const express = require('express');
const router = express.Router();
const productsController= require('../controllers/productsControllers');

// creacion y edicion de productos
router.get('/vender',productsController.vender); 

// detalle del producto

router.get("/detail/:id/",productsController.detail)



//lista de producto
router.get('/',productsController.index);

//crear producto



//eliminar producto



//






module.exports = router;
