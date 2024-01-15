module.exports= (sequelize,DataTypes)=>{
    let alias="Color"
    let cols={
       id_color:{
          type:DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
       },
       tipo_color:{
          type:DataTypes.STRING,
          allowNull: false
       },
       
  
    }
    let config={
       tableName:"colores",
       timestamps: false,
  
    }
    const Color =sequelize.define(alias,cols,config)

    Color.associate= function(models){
      Color.belongsTo(models.Zapatilla,{
         as:"colores_zapatillas",
         foreingKey:"color_id"
      })
   }
  
    return Color
  }
  