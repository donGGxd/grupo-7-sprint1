const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');





router.get('/login',usersControllers.login); 
router.post('/usuario',usersControllers.usuario);
router.get('/registro',usersControllers.registro); 

// Ruta para el formulario de registro
router.get('/registro', usersControllers.registro);

// Ruta para procesar el registro
router.post('/registro', usersControllers.registrarUsuario);
//ruta para mostrar los usuarios 
router.get('/usuariosCuentas', usersControllers.mostrarUsuarios);


module.exports = router;