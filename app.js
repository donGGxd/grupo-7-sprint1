const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, '../public'))); 


app.set('view engine','ejs'); 



//rutas acomodadas
const routes = require('./routes/main');
app.use("/",routes);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

const routesCarrito=require('./routes/carrito');
app.use(routesCarrito)

const routesUsuario=require('./routes/usuario');
app.use(routesUsuario)

const productsRouter=require('./routes/products')
app.use("/products",productsRouter)




//rutas de productos 



app.get('/producto1', (req, res) => {
    res.render('productos/producto1');
});
app.get('productos/producto2', (req, res) => {
    res.render('producto2');
});
app.get('productos/producto3', (req, res) => {
    res.render('producto3');
});
app.get('productos/producto4', (req, res) => {
    res.render('producto4');
});
app.get('productos/producto5', (req, res) => {
    res.render('producto5');
});
app.get('productos/producto6', (req, res) => {
    res.render('producto6');
});
app.get('productos/producto7', (req, res) => {
    res.render('producto7');
});




app.use(express.static('Public'));

app.listen(6500,()=>{
    console.log("serrvidor corriendo")
});
