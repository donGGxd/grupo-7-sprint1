
const db = require('../database/models/index');
const Zapatilla = require('../database/models/zapatillas')(db.sequelize, db.Sequelize);
const Clientes = require('../database/models/clientes')(db.sequelize, db.Sequelize);  

db.sequelize
    .sync()
    .then(() => {
        console.log('Tablas creadas correctamente.');
    })
    .catch(error => {
        console.error('Error al crear las tablas:', error);
    });
