module.exports= (sequelize,DataTypes)=>{
    let alias="Marca"
    let cols={
       id_marca:{
          type:DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
       },
       tipo_marca:{
          type:DataTypes.STRING,
          allowNull: false
       },
       
  
    }
    let config={
       tableName:"marcas",
       timestamps: false,
  
    }
    const Marca=sequelize.define(alias,cols,config)
  
    return Marca
  }
  