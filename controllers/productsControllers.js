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
    },

    // detalle del producto
    detail:function(req,res){
       
        const idProducto= req.params.id

        let productoEncontrado

        for(let i=0; i< products.length; i++){
        if(idProducto== products[i].id){
            productoEncontrado=products[i]
        }
    }
        res.render("productos/detail",{products:productoEncontrado})
    }
      
    
}






module.exports = controlador;
