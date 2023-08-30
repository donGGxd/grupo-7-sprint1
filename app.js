const path = require('path');
const express = require('express');
const app = express();

app.set('view engine','ejs');









app.get('/',(req,res)=>{
    res.render('home')
});
app.get('/formulario', (req, res) => {
    res.render('formulario');
});

app.get('/a', (req, res) => {
    res.render('a');
});

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

app.get('/carrito', (req, res) => {
    res.render('carrito');
});

app.post('/usuario', (req, res) => {
    res.render('usuario');
});

app.get('/hamburguesa', (req, res) => {
    res.render('hamburguesa');
});






app.use(express.static('Public'));

app.listen(6500,()=>{
    console.log("serrvidor corriendo")
});
