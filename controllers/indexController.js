const path = require('path');
const controlador = {
    inicio: (req, res) => {
        res.render('home');
    },
    formularioA:(req,res)=>{
        res.render('a')
    },
    formularioB:(req,res)=>{
        res.render('formulario')
    },
    menu:(req,res)=>{
        res.render('hamburguesa')
    },
    carrito:(req,res)=>{
        res.render('carrito')
    },
    usuario:(req, res) => {
        res.render('usuario');
    }
};

module.exports = controlador;
