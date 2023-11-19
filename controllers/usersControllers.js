const path = require('path');
const fs = require('fs'); 
const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));  
const bcrypt = require('bcrypt');






const controlador = {
    //inicio de session
    login: (req, res) => {
        res.render('login');
    },
    // Controlador para el inicio de sesión
 iniciarSesion: (req, res) => {
    const { email, password } = req.body;

    const usuario = usuarios.usuarios.find(user => user.email === email);

    if (!usuario) {
        return res.redirect('/login?error=Usuario no encontrado');
    }
    bcrypt.compare(password, usuario.password, (err, result) => {
        if (err || !result) {
            return res.redirect('/login?error=Contraseña incorrecta');
        }

        
        res.redirect('/usuariosCuentas');
    });
}
,
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
