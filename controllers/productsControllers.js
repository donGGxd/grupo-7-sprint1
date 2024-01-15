const path = require('path');
const fs = require('fs'); 
const productsFilePath = path.join(__dirname, '../data/ProductosDataBaseJ.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));  
const db= require("../database/models")
const { Op } = require('sequelize')


const controlador = {
    index: (req, res) => {

        db.Zapatilla.findAll()
           .then(zapatillas=>{
               return res.render('productos/products', { productos:zapatillas});
               
           })
           .catch(e=>{
            console.log(e)
           })

    },
    // detalle del producto 
    detail: function (req, res) {

        db.Zapatilla.findByPk(req.params.id)
           .then(productos=>{
           return res.render("productos/detail",{productos:productos})
           })


       /*  const idProducto = req.params.id;
    
        const productoEncontrado = products.find(producto => producto.id === parseInt(idProducto));
    
        if (productoEncontrado) {
            res.render("productos/detail", { products: productoEncontrado });
        } else {
            
            res.status(404).send("Producto no encontrado");
        } */
    },


    //creacion del producto
    crear:(req, res) => {
        res.render('productos/vender');
    },
    store: (req, res) => {

        const imagenZapatilla= req.file.filename

        db.Zapatilla.create(
        
         {
            nombre: req.body.name,
            descripcion: req.body.description,
           /*  marca_id: req.body.category, */
            imagen:imagenZapatilla,
            descuento: req.body.discount,
            precio: req.body.price,
        }
        ).then(()=>{
            res.redirect('/')
        })
    
       console.log(req.body)

        /* const idProductoNuevo = products.reduce((maxId, producto) => {
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
    
        res.redirect('/'); */

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
