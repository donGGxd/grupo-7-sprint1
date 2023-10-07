const express = require('express');
const router = express.Router();
const path=require('path')
const usersControllers = require('../controllers/usersControllers');
const multer = require('multer');
//







const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/users'))
    },
    filename: (req, file, cb) => {
        
        const newFilename = 'group-' + Date.now() + path.extname(file.originalname);
        req.newFilename = newFilename; 
        cb(null, newFilename);
    }
});

const upload =multer({storage});









router.get('/login',usersControllers.login); 
router.post('/usuario',usersControllers.usuario);
router.get('/registro',usersControllers.registro); 

// Ruta para el formulario de registro
router.get('/registro', usersControllers.registro);

// Ruta para procesar el registro
router.post('/registro',upload.single('image'), usersControllers.registrarUsuario);
//ruta para mostrar los usuarios 
router.get('/usuariosCuentas', usersControllers.mostrarUsuarios);


module.exports = router;