module.exports= (sequelize,DataTypes)=>{
    let alias="tipo_Usuarios"
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
    const tipo_Usuario =sequelize.define(alias,cols,config)
  
    return tipo_Usuario
  }
  