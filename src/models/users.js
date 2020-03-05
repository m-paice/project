module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
  });

  //   Users.associate = (models) => {
  //     Users.hasMany(models.posts, { foreignKey: 'authorId', as: 'post' });
  //     Users.hasMany(models.comments, { foreignKey: 'authorId', as: 'comment' });
  //     Users.hasOne(models.files, { foreignKey: 'authorId', as: 'file' });
  //   };

  return Users;
};
