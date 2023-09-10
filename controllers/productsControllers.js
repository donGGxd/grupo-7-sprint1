const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));  


const controlador = {
    index: (req, res) => {
        res.render('productos/products', { products: products});
    },
    vender: (req, res) => {
        res.render('productos/vender');
    }

    
}






module.exports = controlador;
