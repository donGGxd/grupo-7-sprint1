const express = require('express');
const router = express.Router();
const path = require('path');
const productsController= require('../controllers/productsControllers');
 

//multer 
const multer = require('multer');



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      let folder = path.join(__dirname, '../public/img');
      callback(null, folder);
    },
    filename: (req, file, callback) => {
      let imageName = Date.now() + path.extname(file.originalname);
      callback(null, imageName);
    }
  });
  
  const upload = multer({ storage });














// detalle del producto

router.get("/detail/:id/",productsController.detail)

//lista de producto
router.get('/',productsController.index);

//crear producto

router.get('/vender', productsController.crear);
router.post('/vender', upload.single('image'), productsController.store);

//eliminar producto

router.delete('/borrar/:id', productsController.borrar);


//






module.exports = router;
