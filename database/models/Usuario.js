module.exports= (sequelize,DataTypes)=>{
  let alias="Usuarios"
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
            model: 'tipo_Usuario',
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

  return Usuario
}

