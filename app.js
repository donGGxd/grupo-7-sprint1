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
app.get('/producto2',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/producto2.html"))
});
app.get('/producto3',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/producto3.html"))
});
app.get('/producto4',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/producto4.html"))
});
app.get('/producto5',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/producto5.html"))
});
app.get('/producto6',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/producto6.html"))
});
app.get('/producto7',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/producto7.html"))
});
app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/carrito.html"))
});
app.post('/usuario',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/usuario.html"))
});
app.get('/hamburguesa',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/hamburguesa.html"))
});






app.use(express.static('Public'));

app.listen(6500,()=>{
    console.log("serrvidor corriendo")
});
