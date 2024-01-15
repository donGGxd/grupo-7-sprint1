/*  const zapatillas = require("./zapatillas")  */

module.exports= (sequelize,DataTypes)=>{
    let alias="Zapatilla"
    let cols={
       id_zapatillas:{
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

     precio:{
        type: DataTypes.REAL
     },

     imagen:{
        type:DataTypes.STRING,
        allowNull:false
     },
  
       marca_id:{
          type:DataTypes.INTEGER.UNSIGNED,
          foreignKey:true,
          references: {
              model: 'Marca',
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
    const Zapatilla =sequelize.define(alias,cols,config)

      Zapatilla.associate= function(models){
       /*  Zapatilla.belongsTo(models.Carrito,{
           as:"zapatilla_carrito",
           foreingKey:"zapatillad_id"
        }) 
     */

   /*  Zapatilla.belongsTo(models.Marca,{
            as:"zapatilla_marca",
            foreingKey:"marca_id",

            })   */
  /*   Zapatilla.hasMany(models.Color,{
            as:"zapatilla_color",
            foreingKey:"color_id",
    
            }) 
     Zapatilla.hasMany(models.Talle,{
             as:"zapatilla_talle",
            foreingKey:"talle_id",
        
             })  */
            }  
  
    return Zapatilla
    
   
  }
  
