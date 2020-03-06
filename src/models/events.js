module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('events', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    startDatetime: DataTypes.DATE,
    endDatetime: DataTypes.DATE,
  }, {
    tableName: 'events',
  });

  Events.associate = (models) => {
    Events.belongsTo(models.users, { foreignKey: 'userId', as: 'user' });
  };

  return Events;
};
