module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentbody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
