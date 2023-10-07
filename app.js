const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const methodOverride =require('method-override');




app.use(express.static(path.join(__dirname, '../public'))); 
app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


//rutas acomodadas
const routes = require('./routes/main');
app.use("/",routes);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

const routesCarrito=require('./routes/carrito');
app.use(routesCarrito)

const routesUsuario=require('./routes/usuario');
app.use(routesUsuario)

const productsRouter=require('./routes/products')
app.use("/products",productsRouter)





app.use(express.static('Public'));

app.listen(6500,()=>{
    console.log("serrvidor corriendo")
});
