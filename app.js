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





app.use(express.static('Public'));

app.listen(6500,()=>{
    console.log("serrvidor corriendo")
});
