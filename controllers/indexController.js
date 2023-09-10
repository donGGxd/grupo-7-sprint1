const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));  


const productsDescuentoFilePath = path.join(__dirname, '../data/ProductosDescuento.json');
const productsDescuento = JSON.parse(fs.readFileSync(productsDescuentoFilePath, 'utf-8'));



const controlador = {
    inicio: (req, res) => {
        res.render('home', { products: products ,productsDescuento:productsDescuento});
    },
    login: (req, res) => {
        res.render('login');
    },
    registro: (req, res) => {
        res.render('registro');
    },
    menu: (req, res) => {
        res.render('hamburguesa');
    },
    carrito: (req, res) => {
        res.render('carrito');
    },
    usuario: (req, res) => {
        res.render('usuario');
    },
   
};

module.exports = controlador;
