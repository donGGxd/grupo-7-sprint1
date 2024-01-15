module.exports= (sequelize,DataTypes)=>{
    let alias="Tipo_Usuario"
    let cols={
       id_tipo:{
          type:DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
       },
       tipo:{
          type:DataTypes.STRING,
          allowNull: false
       },
       
  
    }
    let config={
       tableName:"tipo_clientes",
       timestamps: false,
  
    }
    const Tipo_Usuario =sequelize.define(alias,cols,config)

    Tipo_Usuario.associate= function(models){
      Tipo_Usuario.hasMany(models.Usuario,{
         as:"tipo_user",
         foreingKey:"tipo_id"
      })

    }
  
    return Tipo_Usuario
  }
  