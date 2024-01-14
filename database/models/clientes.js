// clientes.js
module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define('Clientes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        zapas_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'Client',
        timestamps: false
    });

    Clientes.associate = function (models) {
        Clientes.belongsTo(models.Zapatilla, {  
            as: 'clientes',
            foreignKey: 'cliente_id'
        });
    }

    return Clientes;
};
