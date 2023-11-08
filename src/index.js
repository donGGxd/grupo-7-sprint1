const db = require('../database/models/index');
const Actor = require('../database/models/actors')(db.sequelize, db.Sequelize);


db.sequelize
  .sync()
  .then(() => {
    console.log('Tabla "actors" creada correctamente.');
  })
  .catch(error => {
    console.error('Error al crear la tabla "actors":', error);
  });
