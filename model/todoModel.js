module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending', 
        validate: {
          isIn: [['Pending', 'Completed', 'In Progress']] 
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true, 
      }
    });
    return Todo;
  };
  