const express = require('express');
const router = express.Router();
const productsController= require('../controllers/productsControllers');



// detalle del producto

router.get("/detail/:id/",productsController.detail)

//lista de producto
router.get('/',productsController.index);

//crear producto

router.get('/vender', productsController.crear);
router.post('/vender', productsController.store);

//eliminar producto

router.delete('/borrar/:id', productsController.borrar);


//






module.exports = router;
