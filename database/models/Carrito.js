module.exports= (sequelize,DataTypes)=>{
    let alias="Carrito"
    let cols={
       id_carrito:{
           type:DataTypes.INTEGER.UNSIGNED,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
       },
       cantidad:{
           type:DataTypes.INTEGER,
           allowNull:false
       },
       importe:{
          type:DataTypes.REAL,
          allowNull:false
       },
  
       zapatillas_id:{
          type:DataTypes.INTEGER.UNSIGNED,
          foreignKey:true,
          references: {
              model: 'zapatillas',
              key: 'id_zapatillas'
          }
  
       }
  
    }
    let config={
       tableName:"carrito",
       timestamps: false,
  
    }
    const Carrito =sequelize.define(alias,cols,config)
  
    return Carrito
  }
  