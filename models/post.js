module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: [1]
    },

    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreighKey: {
        allowNull: false
      }
    });
  };
  return Post;
};