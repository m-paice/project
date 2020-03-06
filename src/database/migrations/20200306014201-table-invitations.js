
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('invitations', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    eventId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'events',
        key: 'id',
      },
    },
    price: Sequelize.DECIMAL,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('invitations'),
};
