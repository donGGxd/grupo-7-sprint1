
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actor', {
      name: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
    });
  
    return Actor;
  };
  