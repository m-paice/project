
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('invitUsers', {
    id: {
      type: Sequelize.INTEGER,
      // defaultValue: Sequelize.UUIDV4,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    invitationId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'invitations',
        key: 'id',
      },
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('invitUsers'),
};
