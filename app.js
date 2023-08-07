const path = require('path');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
});
app.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/formulario.html"))
});
app.get('/a',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/a.html"))
});
app.get('/producto1',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/producto1.html"))
});
app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/carrito.html"))
});






app.use(express.static('Public'));

app.listen(6500,()=>{
    console.log("serrvidor corriendo")
});
