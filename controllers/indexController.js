const path = require('path');
const controlador = {
    inicio: (req, res) => {
        res.render('index');
    },
    detalle:(req,res)=>{
        res.render('detalleMenu')
    }
};

module.exports = controlador;
