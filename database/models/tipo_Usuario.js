module.exports= (sequelize,DataTypes)=>{
    let alias="Tipo_Usuarios"
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
  
    return Tipo_Usuario
  }
  