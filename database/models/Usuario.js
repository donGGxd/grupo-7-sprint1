module.exports= (sequelize,DataTypes)=>{
  let alias="Usuario"
  let cols={
     id_clientes:{
         type: DataTypes.INTEGER.UNSIGNED,
         primaryKey:true,
         autoIncrement:true,
         allowNull:false
     },
     nombre:{
         type:DataTypes.TEXT,
         allowNull:false
     },
     apellido:{
        type:DataTypes.TEXT,
        allowNull:false
     },
     dni:{
         type:DataTypes.INTEGER,
         allowNull:true,
     },
     fecha_nacimiento:{
         type:DataTypes.DATE
     },
     contraseña:{
         type:DataTypes.STRING
     },

     createdAt:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
     },

     updatedAt:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
     },

     tipo_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        foreignKey:true,
        references: {
            model: 'Tipo_Usuario',
            key: 'id_tipo'
        }

     }

  }
  let config={
     tableName:"clientes",
     timestamps: true,
     createdAt: 'created_at',
     updatedAt: 'updated_at'

  }
  const Usuario =sequelize.define(alias,cols,config)

  Usuario.associate=function(models){
    Usuario.belongsTo(models.Tipo_Usuario,{
        as:"usuario_tipo",
        foreignKey:"tipo_id"
    })
    Usuario.belongsTo(models.Venta,{
        as:'usuario_venta',
        foreignKey:'clientes_id'
    })

  }

  return Usuario
}



/* // clientes.js
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
  */
