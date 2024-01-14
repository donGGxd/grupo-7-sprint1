module.exports= (sequelize,DataTypes)=>{
    let alias="zapatilla"
    let cols={
       id:{
           type:DataTypes.INTEGER.UNSIGNED,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
       },
       nombre:{
           type:DataTypes.STRING,
           allowNull:false
       },
       descripcion:{
          type:DataTypes.STRING,
          allowNull:false
       },
       descuento:{
        type:DataTypes.STRING,
        allowNull:false
     },
  
       marca_id:{
          type:DataTypes.INTEGER.UNSIGNED,
          foreignKey:true,
          references: {
              model: 'marcas',
              key: 'id_marca'
          }
  
       },
       talle_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        foreignKey:true,
        references: {
            model: 'talles',
            key: 'id_talle'
        }

     }
  
    }
    let config={
       tableName:"zapatillas",
       timestamps: false,
  
    }
    const zapatilla =sequelize.define(alias,cols,config)
  
    return zapatilla
  }
  