const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));  


const productsDescuentoFilePath = path.join(__dirname, '../data/ProductosDescuento.json');
const productsDescuento = JSON.parse(fs.readFileSync(productsDescuentoFilePath, 'utf-8'));



const controlador = {
    login: (req, res) => {
        res.render('login');
    },
    registro: (req, res) => {
        res.render('registro');
    },
    usuario: (req, res) => {
        res.render('usuario');
    },
   
};

module.exports = controlador;
