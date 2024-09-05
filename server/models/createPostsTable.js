module.exports = (sequealize, Datatypes) => {
  const Posts = sequealize.define("Posts", {
    title: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    postText: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    id: {
      type: Datatypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    column: {
      type: Datatypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
  });
  return Posts;
};
