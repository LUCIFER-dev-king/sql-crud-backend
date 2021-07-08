module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    //cascade -> IF ONE comment drop entire table will be delted.
    User.hasMany(models.Posts, {
      onDelte: "cascade",
    });
  };

  return User;
};
