
module.exports = (sequelize, DataTypes) => {
    const Zapatilla = sequelize.define('Zapatilla', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
      name: {
        type: DataTypes.STRING,
      },
      precio: {
        type: DataTypes.INTEGER,
      },
      marca:{
        type:DataTypes.STRING
      },
      talla:{
        type:DataTypes.INTEGER
      },
      cliente_id:{
        type:DataTypes.INTEGER
      }
    },{
        tableName:'Zapas',
        timestamps:false
    });
   
    Zapatilla.associate=function(models){
       Zapatilla.belongsTo(models.Clientes,{
            as:'zapatillas',
            foreignKey:'zapas_id'
        })
      }
  
    return Zapatilla ;
  };
  