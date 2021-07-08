module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {
    //cascade -> IF ONE comment drop entire table will be delted.
    Posts.hasMany(models.Comments, {
      onDelte: "cascade",
    });
    Posts.hasMany(models.Likes, {
      onDelte: "cascade",
    });
  };

  return Posts;
};
