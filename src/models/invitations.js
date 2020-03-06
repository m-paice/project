module.exports = (sequelize, DataTypes) => {
  const Invitations = sequelize.define(
    'invitations',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      price: DataTypes.DECIMAL,
    },
    {
      tableName: 'invitations',
    },
  );

  Invitations.associate = (models) => {
    Invitations.belongsTo(models.events, {
      foreignKey: 'eventId',
      as: 'event',
    });
    Invitations.belongsToMany(models.users, {
      foreignKey: 'invitationId',
      through: 'invitUsers',
      as: 'users',
    });
  };

  return Invitations;
};
