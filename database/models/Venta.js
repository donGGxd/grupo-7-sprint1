module.exports= (sequelize,DataTypes)=>{
    let alias="Venta"
    let cols={
       id_venta:{
          type:DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
       },
       detalle:{
        type:DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        type:DataTypes.DATE,
        allowNull: false
    },
    total:{
        type:DataTypes.REAL,
        allowNull: false
    },

    clientes_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            foreignKey: true,
            references: {
                model: 'Usuario',
                key: 'id_clientes'
    
        }

    },

    carrito_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        foreignKey: true,
        references: {
            model: 'Carrito',
            key: 'id_carrito'

    }
}
       
  
    }
    let config={
       tableName:"venta",
       timestamps: false,
  
    }
    const Venta=sequelize.define(alias,cols,config)
  
    return Venta
  }

  