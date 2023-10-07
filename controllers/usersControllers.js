const path = require('path');
const fs = require('fs'); 
const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));  
const bcrypt = require('bcrypt');






const controlador = {
    login: (req, res) => {
        res.render('login');
    },
    usuario: (req, res) => {
        res.render('usuario');
    },
    //creacion del usuario
    
    registro: (req, res) => {
        res.render('registro');
    },





    registrarUsuario: (req, res) => {
        const password = req.body.password; 
    
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
               
                return res.status(500).json({ error: 'Error al encriptar la contraseña' });
            }
           
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    
                    return res.status(500).json({ error: 'Error al encriptar la contraseña' });
                }
                const nuevoUsuario = {
                    id: usuarios.usuarios.length + 1,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash, 
                    category: req.body.category,
                    image: '/img/users/' + req.newFilename,
                };
    
                usuarios.usuarios.push(nuevoUsuario);
    
                fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));
    
                res.redirect('/');
            });
        });
    },
    
    
    



    mostrarUsuarios: (req, res) => {
        res.render('lista', { usuarios: usuarios.usuarios });
    }
};


module.exports = controlador;
