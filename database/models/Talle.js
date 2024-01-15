module.exports= (sequelize,DataTypes)=>{
    let alias="Talle"
    let cols={
       id_talle:{
          type:DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
       },
       talle:{
          type:DataTypes.STRING,
          allowNull: false
       },
       
  
    }
    let config={
       tableName:"talles",
       timestamps: false,
  
    }
    const Talle =sequelize.define(alias,cols,config)

    
    Talle.associate= function(models){
     Talle.belongsTo(models.Zapatilla,{
         as:"talles_zapatillas",
         foreingKey:"talle_id"
      })
   }
  
    return Talle
  }
  