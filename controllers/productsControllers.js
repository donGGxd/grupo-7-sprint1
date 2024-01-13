const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));  




const controlador = {
    index: (req, res) => {

        res.render('productos/products', { products: products});
    },
    // detalle del producto
    detail: function (req, res) {
        const idProducto = req.params.id;
    
        const productoEncontrado = products.find(producto => producto.id === parseInt(idProducto));
    
        if (productoEncontrado) {
            res.render("productos/detail", { products: productoEncontrado });
        } else {
            
            res.status(404).send("Producto no encontrado");
        }
    },
    //creacion del producto
    crear:(req, res) => {
        res.render('productos/vender');
    },
    store: (req, res) => {
        const idProductoNuevo = products.reduce((maxId, producto) => {
            return Math.max(maxId, producto.id);
        }, 0) + 1;
    
        const productoNuevo = {
            id: idProductoNuevo,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image,
            discount: req.body.discount,
            price: req.body.price,
        };
    
        products.push(productoNuevo);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    
        res.redirect('/');
    },
 //borrar
        borrar: (req, res) => {
            const idProducto = req.params.id;
            const index = products.findIndex(producto => producto.id === parseInt(idProducto));
        
            if (index !== -1) {
                products.splice(index, 1);
                fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
                res.redirect('/');
            } 
        },

        editar: function(req, res){
         /*    let zapatilla= products.find(zapatilla => zapatilla.id == req.params.id) */
             res.render("productos/editar"/* ,{zapatilla} */)
        },


        update: function(req,res){

            

        }
    }






module.exports = controlador;
