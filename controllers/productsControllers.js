const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));  


const controlador = {
    index: (req, res) => {
        res.render('products', { products: products});
    }
}






module.exports = controlador;
