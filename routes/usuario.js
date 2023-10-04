const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');





router.get('/login',usersControllers.login); 
router.post('/usuario',usersControllers.usuario);
router.get('/registro',usersControllers.registro); 

module.exports = router;