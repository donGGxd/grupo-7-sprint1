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

    Carrito.associate= function(models){
      /* Carrito.hasMany(models.Zapatilla,{
         as:"carrito_zapatilla",
         foreingKey:"zapatillas_id"
      }) */

      Carrito.belongsTo(models.Venta,{
         as:'carrito_venta',
         foreignKey:'carrito_id'
     })

    } 
  
    return Carrito
  }
  