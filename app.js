const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, './public'))); 


app.set('view engine','ejs');



//rutas acomodadas
const routes = require('./routes/inicio');
app.use(routes);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

 const routesA = require('./routes/formularioA');
 app.use(routesA);

const routesB=require('./routes/formularioB');
app.use(routesB);

const routesmenu = require('./routes/menu');
app.use(routesmenu);
const routesCarrito=require('./routes/carrito');
app.use(routesCarrito)

const routesUsuario=require('./routes/usuario');
app.use(routesUsuario)

const routesVenta=require('./routes/vender');
app.use(routesVenta)





//rutas de productos 

app.get('/producto1', (req, res) => {
    res.render('producto1');
});
app.get('/producto2', (req, res) => {
    res.render('producto2');
});
app.get('/producto3', (req, res) => {
    res.render('producto3');
});
app.get('/producto4', (req, res) => {
    res.render('producto4');
});
app.get('/producto5', (req, res) => {
    res.render('producto5');
});
app.get('/producto6', (req, res) => {
    res.render('producto6');
});
app.get('/producto7', (req, res) => {
    res.render('producto7');
});




app.use(express.static('Public'));

app.listen(6500,()=>{
    console.log("serrvidor corriendo")
});
