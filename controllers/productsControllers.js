const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));  


const controlador = {
    index: (req, res) => {

        res.render('productos/products', { products: products});
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
    },
    //creacion del producto
    crear:(req, res) => {
        res.render('productos/vender');
    },
    store: (req, res) => {
        //console.log(req.body);
       
    let idProductoNuevo = 0;
    let productoNuevo = {}; 

    for (let i = 0; i < products.length; i++) {
        if (idProductoNuevo < products[i].id) {
            idProductoNuevo++;
        }
    }

    idProductoNuevo = idProductoNuevo + 1;

    productoNuevo = {
        id: idProductoNuevo,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        discount: req.body.discount,
        price: req.body.price,
    };

    products.push(productoNuevo);
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null,""))
        res.render('productos/products',{ products: products})
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
        }
        

    }






module.exports = controlador;
